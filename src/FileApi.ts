export class FileApi {
    async readJSON<T>(path: string): Promise<T | null> {
        if (path.match(/^http(s?):\/\//)) {
            return await (await fetch(path)).json();
        }

        try {
            return JSON.parse(await Deno.readTextFile(path));
        } catch (e) {
            return null;
        }
    }

    async readText(path: string): Promise<string> {
        return await Deno.readTextFile(path);
    }

    async read(path: string): Promise<Uint8Array> {
        return await Deno.readFile(path);
    }

    async write(path: string, data: string | Uint8Array): Promise<void> {
        if (typeof data === "string") {
            await Deno.writeTextFile(path, data);
        } else {
            await Deno.writeFile(path, data);
        }
    }

    /*async replace(path: string, what: string|RegExp, to: string): Promise<void> {
        let t = await this.readText(path);
        t = t.replace(what, to);
        await this.write(path, t);
    }

    async createTemp(): Promise<string> {
        // const path = Path.dirname();
        const fileName = MD5(Math.random() + '_' + Math.random() + '_' + Math.random() + '_' + Math.random());
        const path = (OS.tmpdir() + '/temp-files/' + fileName).replace(/\\/g, '/');

        // Create temp dir
        await MkDir(OS.tmpdir() + '/temp-files', {recursive: true});

        // Create empty file
        await WriteFile(path, '');

        // Return link
        return path;
    }*/

    async delete(path: string): Promise<void> {
        await Deno.remove(path);
    }
}

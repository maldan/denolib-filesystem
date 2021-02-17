export class FileSyncApi {
    /*readJSON<T>(path: string): Promise<T> {
        try {
            return JSON.parse(Fs.readFileSync(path, 'utf-8'));
        }
        catch (e) {
            return null;
        }
    }

    readText(path: string): string {
        return Fs.readFileSync(path, 'utf-8');
    }

    readBinary(path: string): Buffer {
        return Fs.readFileSync(path);
    }

    write(path: string, data: string|Buffer): void {
        Fs.writeFileSync(path, data);
    }

    replace(path: string, what: string|RegExp, to: string): void {
        let t = this.readText(path);
        t = t.replace(what, to);
        this.write(path, t);
    }*/
}

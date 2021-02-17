import { FileApi } from "./FileApi.ts";
import { DirApi } from "./DirApi.ts";
import { Sync } from "./Sync.ts";

export class FileSystem {
    static file: FileApi = new FileApi();
    static dir: DirApi = new DirApi();
    static sync: Sync = new Sync();

    static async isDir(path: string): Promise<boolean> {
        try {
            const info = await Deno.lstat(path);
            return info.isDirectory;
        } catch (e) {
            return false;
        }
    }

    static async exists(path: string): Promise<boolean> {
        try {
            await Deno.lstat(path);
            return true;
        } catch (err) {
            return false;
        }
    }

    static async lstat(path: string): Promise<Deno.FileInfo> {
        return await Deno.lstat(path);
    }

    static async stat(path: string): Promise<Deno.FileInfo> {
        return await Deno.stat(path);
    }
}

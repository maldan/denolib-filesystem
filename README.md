# File System

Fily system wrapper module for deno.

---

NOTE! Currently is under development

---

## Example

```ts
await FileSystem.file.write(`./t.txt`, "Hi!");
await FileSystem.file.readText(`./t.txt`); // Hi!
await FileSystem.exists(`./t.txt`); // true
await FileSystem.isDir(`./t.txt`); // false
```

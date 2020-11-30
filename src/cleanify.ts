import { expandGlob } from "https://deno.land/std@0.79.0/fs/mod.ts";
import { parse } from "./parser.ts";

for await (const cleanFile of expandGlob('**/*.clean')) {
    if (cleanFile.isFile) {
        const data = await Deno.readTextFile(cleanFile.path);
        const globs = parse(data);
        await clean(globs);
    }
}

async function clean(globs: string[], verbose = true): Promise<void> {
    for (const glob of globs) {
        for await (const { path } of expandGlob(glob)) {
            if (verbose) {
                console.log(`removing ${path}`);
            }

            await Deno.remove(path);
        }
    }
}
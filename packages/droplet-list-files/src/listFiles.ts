import { clean } from "@dddstack/droplet-clean";
import { DROPLET_DIRECTORY_NAME, DROPLET_FILE_PREFIX } from "@dddstack/droplet-constants";
import { trim } from "@dddstack/droplet-trim";
import { lstatSync, readdirSync } from "fs";
import { join } from "path";

export const listFiles = (path: string, rootPath?: string): {
  cleaned: string;
  original: string;
  trimmed: string;
  trimmedCleaned?: string;
}[] =>
  readdirSync(path).map((pathPath) => {
    const joinedPathPathPath = join(path, pathPath);

    return !lstatSync(joinedPathPathPath).isDirectory()
      ? pathPath.startsWith(DROPLET_FILE_PREFIX) && pathPath.endsWith(".hbs")
        ? {
          cleaned: clean(pathPath),
          original: joinedPathPathPath,
          trimmed: trim(joinedPathPathPath, rootPath ?? path),
          trimmedCleaned: clean(trim(joinedPathPathPath, rootPath ?? path))
        }
        : []
      : pathPath.startsWith(DROPLET_DIRECTORY_NAME)
        ? listFiles(joinedPathPathPath, rootPath ?? path)
        : [];
  }).flat();

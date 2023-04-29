import { lstatSync, readdirSync } from "fs";
import { join } from "path";

import { clean } from "./clean";
import {
  DROPLET_DIRECTORY_NAME,
  DROPLET_TEMPLATE_PREFIX
} from "./constants";
import { trim } from "./trim";

export const listTemplates = (
  path: string,
  rootPath?: string
): {
  cleaned: string;
  original: string;
  trimmed: string;
  trimmedCleaned?: string;
}[] =>
  readdirSync(path)
    .map((pathPath) => {
      const joinedPathPathPath = join(path, pathPath);

      if (lstatSync(joinedPathPathPath).isDirectory()) {
        if (pathPath.startsWith(DROPLET_TEMPLATE_PREFIX))
          return {
            cleaned: clean(pathPath),
            original: joinedPathPathPath,
            trimmed: trim(joinedPathPathPath, rootPath ?? path),
            trimmedCleaned: clean(
              trim(joinedPathPathPath, rootPath ?? path)
            )
          };

        if (pathPath.startsWith(DROPLET_DIRECTORY_NAME))
          return listTemplates(
            joinedPathPathPath,
            rootPath ?? path
          );
      }
      return [];
    })
    .flat();

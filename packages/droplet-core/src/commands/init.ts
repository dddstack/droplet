import { existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import type { DropletOptions } from "../droplet";
import {
  copy,
  DROPLET_DIRECTORY_NAME,
  dropletExists,
  log,
  logSuccess
} from "../lib";

const PUBLIC_INIT_DIRECTORY_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "public",
  "init"
);

export const init = (options: DropletOptions) => {
  console.log("\n");

  log("Searching for Droplet...");

  console.log("\n");

  const dropletDirectory = join(
    options.fromDirectory,
    DROPLET_DIRECTORY_NAME
  );

  if (existsSync(dropletDirectory))
    dropletExists(dropletDirectory);

  mkdirSync(dropletDirectory);

  log("Initializing Droplet with example droplets...");

  copy(PUBLIC_INIT_DIRECTORY_PATH, dropletDirectory);

  console.log("\n");

  logSuccess("Droplet initialized at " + dropletDirectory);

  console.log("\n");
};

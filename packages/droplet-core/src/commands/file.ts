import { existsSync } from "fs";
import { join } from "path";

import type { DropletOptions } from "../droplet";
import {
  drop,
  DROPLET_DIRECTORY_NAME,
  dropletNotFound,
  listFiles,
  log,
  logSuccess,
  noFound,
  promptFile,
  promptLocation,
  promptValue
} from "../lib";

export const file = async (options: DropletOptions) => {
  const DROPLET_DIRECTORY_PATH = join(
    options.fromDirectory,
    DROPLET_DIRECTORY_NAME
  );

  if (!existsSync(DROPLET_DIRECTORY_PATH)) dropletNotFound();

  const files = listFiles(DROPLET_DIRECTORY_PATH);

  if (files.length === 0) noFound("files");

  const location = await promptLocation();

  const file = await promptFile(files);

  const value = await promptValue();

  if (location && file && value) {
    console.log("\n");

    log("Droplet in progress...");

    drop(value, [file], location, "file");

    console.log("\n");

    logSuccess("Droplet complete!");

    console.log("\n");
  }
};

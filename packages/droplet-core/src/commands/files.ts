import { existsSync } from "fs";
import { join } from "path";
import { exit } from "process";
import prompts from "prompts";

import {
  drop,
  DROPLET_DIRECTORY_NAME,
  listFiles,
  log,
  promptDroplet,
  promptFiles,
  promptTo
} from "../lib";
import type { Options } from "../types";
import { dropletNotFound } from "./logs";

export const files = (options: Options) => {
  log.droplet("Searching for Droplet files...");

  console.log("\n");

  const DROPLET_DIRECTORY_PATH = join(
    options.fromDirectory,
    DROPLET_DIRECTORY_NAME
  );

  if (!existsSync(DROPLET_DIRECTORY_PATH)) {
    dropletNotFound();
    exit(1);
  }

  prompts([
    promptFiles(listFiles(DROPLET_DIRECTORY_PATH)),
    promptTo,
    promptDroplet
  ]).then((answers) => {
    const { files, to, droplet } = answers;

    if (files && to && droplet) {
      console.log("\n");

      log.box("yellow", "Files", "Dropletting files...");

      drop(droplet, files, to, "file");

      console.log("\n");

      log.box("green", "Success", "Droplet complete!");

      console.log("\n");
    }
  });
};

import chalk from "chalk";
import { existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { exit } from "process";
import { fileURLToPath } from "url";

import { copy, DROPLET_DIRECTORY_NAME, log } from "../lib";
import type { Options } from "../types";

const PUBLIC_INIT_DIRECTORY_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "public",
  "init"
);

export const init = (options: Options) => {
  log.droplet("Searching for Droplet...");

  console.log("\n");

  const dropletDirectory = join(
    options.fromDirectory,
    DROPLET_DIRECTORY_NAME
  );

  if (existsSync(dropletDirectory)) {
    log.box(
      "red",
      "Error",
      `Droplet already exists at ${dropletDirectory}`
    );

    log.indent("To use Droplet, run one of the following:");
    log.indent(chalk.bold("droplet files"));
    log.indent(chalk.bold("droplet template"));

    console.log("\n");
    exit(0);
  }

  mkdirSync(dropletDirectory);

  log.droplet("Initializing Droplet with example droplets...");

  copy(PUBLIC_INIT_DIRECTORY_PATH, dropletDirectory);

  console.log("\n");

  log.box(
    "green",
    "Success",
    `Droplet initialized at ${dropletDirectory}`
  );

  console.log("\n");
};

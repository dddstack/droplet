import { DROPLET_DIRECTORY_NAME } from "@dddstack/droplet-constants";
import { copy } from "@dddstack/droplet-copy";
import { log } from "@dddstack/droplet-log";
import type { Options } from "@dddstack/droplet-options";
import { existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { exit } from "process";
import { fileURLToPath } from "url";

const PUBLIC_INIT_DIRECTORY_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "public",
  "init"
);

export const init = (options: Options) => {
  const dropletDirectory = join(
    options.fromDirectory,
    DROPLET_DIRECTORY_NAME
  );

  log({
    command: "INIT",
    message: "Looking for Droplet...",
    status: 1,
    statusOf: 3,
    type: "status"
  });

  if (existsSync(dropletDirectory)) {
    log({
      message: `Droplet already exists at ${dropletDirectory}`,
      type: "error"
    });
    exit(0);
  }

  mkdirSync(dropletDirectory);

  log({
    command: "INIT",
    message: "Initializing Droplet...",
    status: 2,
    statusOf: 3,
    type: "status"
  });

  copy(PUBLIC_INIT_DIRECTORY_PATH, dropletDirectory);

  log({
    command: "INIT",
    message: `Droplet initialized at ${dropletDirectory}`,
    status: 3,
    statusOf: 3,
    type: "status"
  });
};

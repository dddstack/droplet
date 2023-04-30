import chalk from "chalk";
import { exit } from "process";

import { log } from "../log";
import { logError } from "../logError";

export const dropletExists = (dropletDirectory: string) => {
  logError("Droplet already exists at " + dropletDirectory);

  log("To use Droplet, run one of the following:");
  log(chalk.bold("droplet file"));
  log(chalk.bold("droplet template"));

  console.log("\n");
  exit(0);
};

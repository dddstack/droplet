import chalk from "chalk";
import { exit } from "process";

import { log, logError } from "../..";

export const dropletNotFound = () => {
  logError("Droplet not found");

  console.log("\n");

  log("To initialize Droplet, please run:");

  log(chalk.bold("droplet init"));

  console.log("\n");

  exit(0);
};

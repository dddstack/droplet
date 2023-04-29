import chalk from "chalk";

import { log } from "../../lib";

export const dropletNotFound = () => {
  log.box("red", "Error", "Droplet not found");

  console.log("\n");

  log.indent("To initialize Droplet, please run:");

  log.indent(chalk.bold("droplet init"));

  console.log("\n");
};

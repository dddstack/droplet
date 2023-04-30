import chalk from "chalk";

import { log, logDroplet } from "../lib";

export const commands = () => {
  console.log("\n");

  logDroplet("Commands:");

  log(chalk.bold("file") + ": Droplet file.");
  log(chalk.bold("init") + ": Initialize Droplet.");
  log(chalk.bold("template") + ": Droplet template.");

  console.log("\n");
};

import chalk from "chalk";

import { log, logDroplet } from "../lib";

export const commands = () => {
  logDroplet("Commands:");

  log(chalk.bold("init") + ": Initialize Droplet.");
  log(chalk.bold("file") + ": Droplet file.");
  log(chalk.bold("template") + ": Droplet template.");

  console.log("\n");
};

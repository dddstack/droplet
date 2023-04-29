import chalk from "chalk";

import { log } from "../lib";

export const help = () => {
  log.droplet("Commands:");

  log.indent(`${chalk.bold("help")}: Display help for Droplet.`);
  log.indent(`${chalk.bold("files")}: Droplet files.`);
  log.indent(`${chalk.bold("init")}: Initialize Droplet.`);
  log.indent(`${chalk.bold("template")}: Droplet template.`);

  console.log("\n");
};

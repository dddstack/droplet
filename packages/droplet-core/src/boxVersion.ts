import chalk from "chalk";

import { version } from "../package.json";
import { logDroplet } from "./lib/log/logDroplet";

export const boxVersion = () => {
  console.log("\n");

  logDroplet(
    chalk.bold("v" + version) + " @ddddstack/droplet initiated."
  );

  console.log("\n");
};

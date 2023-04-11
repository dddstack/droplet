import chalk from "chalk";

import { Log } from "../log.types";

export const logStatus = (log: Log<"status">) =>
  console.log(`${chalk.yellow(log.command)} [${log.status}/${log.statusOf}] ${log.message}`);

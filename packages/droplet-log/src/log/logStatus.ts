import chalk from "chalk";

import type { Log } from "../log.types";

export const logStatus = (log: Log<"status">) =>
  console.log(
    `${chalk.yellow(log.command)} [${log.status}/${
      log.statusOf
    }] ${log.message}`
  );

import chalk from "chalk";
import { Log } from "../log.types";

export const logFile = (log: Log<"file">) =>
  console.log(`${chalk.green("+")} ${log.file}`);

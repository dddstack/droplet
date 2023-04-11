import type { Log } from "../log.types";
import type { LogType } from "../logType.types";
import { logBasic } from "./logBasic";
import { logError } from "./logError";
import { logFile } from "./logFile";
import { logStatus } from "./logStatus";

export const log = <LogTypeType extends LogType>(log: Log<LogTypeType>) => {
  switch (log.type) {
    case "error":
      return logError(log);
    case "file":
      return logFile(log);
    case "status":
      return logStatus(log);
    default:
      return logBasic(log);
  }
};

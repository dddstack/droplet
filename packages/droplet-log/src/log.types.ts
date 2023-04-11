import type { LogType } from "./logType.types";

export type Log<LogTypeType extends LogType> =
  LogTypeType extends "error" ? {
    message: string;
    type: LogTypeType;
  } :
  LogTypeType extends "file" ? {
    file: string;
    type: LogTypeType;
  } :
  LogTypeType extends "status" ? {
    command: Uppercase<string>;
    message: string;
    status: number;
    statusOf: number;
    type: LogTypeType;
  } : {
    message: string;
    type: LogTypeType;
  };

import { log } from "@ddddurk/kit";

import { colors } from "../colors";

export const logError = (text: string) =>
  log(text, { label: { hex: colors.red, text: "error" } });

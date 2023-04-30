import { log } from "@ddddurk/kit";

import { colors } from "../colors";

export const logSuccess = (text: string) =>
  log(text, { label: { hex: colors.green, text: "success" } });

import { log } from "@ddddurk/kit";

import { colors } from "../colors";

export const logDroplet = (text: string) =>
  log(text, { label: { hex: colors.droplet, text: "droplet" } });

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const green = require("@ddddurk/colors/colors/green.json");
const indigo = require("@ddddurk/colors/colors/indigo.json");
const red = require("@ddddurk/colors/colors/red.json");

export const colors = {
  droplet: indigo[600],
  green: green[600],
  red: red[600]
};

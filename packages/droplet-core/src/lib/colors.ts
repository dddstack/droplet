import { createRequire } from "module";
const require = createRequire(import.meta.url);

const cyan = require("@ddddurk/colors/colors/cyan.json");
const green = require("@ddddurk/colors/colors/green.json");
const pink = require("@ddddurk/colors/colors/pink.json");
const red = require("@ddddurk/colors/colors/red.json");

export const colors = {
  cyan: cyan[500],
  green: green[500],
  pink: pink[500],
  red: red[500]
};

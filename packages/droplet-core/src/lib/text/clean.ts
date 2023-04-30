import {
  DROPLET_DIRECTORY_PREFIX,
  DROPLET_FILE_PREFIX,
  DROPLET_TEMPLATE_PREFIX
} from "../constants";

export const clean = (text: string) =>
  text
    .replace(new RegExp(DROPLET_DIRECTORY_PREFIX, "g"), "")
    .replace(new RegExp(DROPLET_FILE_PREFIX, "g"), "")
    .replace(new RegExp(DROPLET_TEMPLATE_PREFIX, "g"), "")
    .replace(/.hbs/g, "");

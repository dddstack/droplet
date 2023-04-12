import {
  DROPLET_DIRECTORY_PREFIX,
  DROPLET_FILE_PREFIX,
  DROPLET_TEMPLATE_PREFIX
} from "@dddstack/droplet-constants";

export const clean = (path: string) =>
  path
    .replace(new RegExp(DROPLET_DIRECTORY_PREFIX, "g"), "")
    .replace(new RegExp(DROPLET_FILE_PREFIX, "g"), "")
    .replace(new RegExp(DROPLET_TEMPLATE_PREFIX, "g"), "")
    .replace(/.hbs/g, "");

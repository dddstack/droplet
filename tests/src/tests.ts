import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const TESTS_DROPLET_DIRECTORY_PATH =
  join(dirname(fileURLToPath(import.meta.url)), "..", "droplet");

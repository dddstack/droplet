import { DROPLET_TEMPLATE_PREFIX } from "@dddstack/droplet-constants";
import { TESTS_DROPLET_DIRECTORY_PATH } from "@tests";
import { join } from "path";

import { listTemplates } from "../src";

describe("listTemplates", () =>
  it(`should list all templates prefixed with ${DROPLET_TEMPLATE_PREFIX} in a path`, () =>
    expect(listTemplates(TESTS_DROPLET_DIRECTORY_PATH)).toEqual([
      join(TESTS_DROPLET_DIRECTORY_PATH, "droplet_directory_nested/droplet_directory_nested/droplet_template_template"),
      join(TESTS_DROPLET_DIRECTORY_PATH, "droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}"),
      join(TESTS_DROPLET_DIRECTORY_PATH, "droplet_directory_nested/droplet_template_template"),
      join(TESTS_DROPLET_DIRECTORY_PATH, "droplet_directory_nested/droplet_template_{{droplet}}"),
      join(TESTS_DROPLET_DIRECTORY_PATH, "droplet_template_template"),
      join(TESTS_DROPLET_DIRECTORY_PATH, "droplet_template_{{droplet}}")
    ])
  )
);

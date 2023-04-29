import { DROPLET_TEMPLATE_PREFIX } from "@dddstack/droplet-constants";
import { TESTS_DROPLET_DIRECTORY_PATH } from "@tests";
import { join } from "path";

import { listTemplates } from "../dist";

describe("listTemplates", () =>
  it(`should list all templates prefixed with ${DROPLET_TEMPLATE_PREFIX} in a path`, () =>
    expect(listTemplates(TESTS_DROPLET_DIRECTORY_PATH)).toEqual([
      {
        cleaned: "template",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "droplet_directory_nested/droplet_directory_nested/droplet_template_template"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template",
        trimmedCleaned: "/nested/nested/template"
      },
      {
        cleaned: "{{droplet}}",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}",
        trimmedCleaned: "/nested/nested/{{droplet}}"
      },
      {
        cleaned: "template",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "droplet_directory_nested/droplet_template_template"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_template",
        trimmedCleaned: "/nested/template"
      },
      {
        cleaned: "{{droplet}}",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "droplet_directory_nested/droplet_template_{{droplet}}"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_{{droplet}}",
        trimmedCleaned: "/nested/{{droplet}}"
      },
      {
        cleaned: "template",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "droplet_template_template"
        ),
        trimmed: "/droplet_template_template",
        trimmedCleaned: "/template"
      },
      {
        cleaned: "{{droplet}}",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "droplet_template_{{droplet}}"
        ),
        trimmed: "/droplet_template_{{droplet}}",
        trimmedCleaned: "/{{droplet}}"
      }
    ])));

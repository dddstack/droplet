import { DROPLET_FILE_PREFIX } from "@dddstack/droplet-constants";
import { TESTS_DROPLET_DIRECTORY_PATH } from "@tests";
import { join } from "path";

import { listFiles } from "../src";

describe("listFiles", () =>
  it(`should list all files prefixed with ${DROPLET_FILE_PREFIX} in a path`, () => {
    console.log(listFiles(TESTS_DROPLET_DIRECTORY_PATH));
    expect(listFiles(TESTS_DROPLET_DIRECTORY_PATH)).toEqual([
      {
        cleaned: "example.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs",
        trimmedCleaned: "/nested/nested/template/example.ts"
      },
      {
        cleaned: "exampleWithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs",
        trimmedCleaned: "/nested/nested/template/exampleWithDroplet.ts"
      },
      {
        cleaned: "{{droplet}}.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs",
        trimmedCleaned: "/nested/nested/template/{{droplet}}.ts"
      },
      {
        cleaned: "{{droplet}}WithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs",
        trimmedCleaned: "/nested/nested/template/{{droplet}}WithDroplet.ts"
      },
      {
        cleaned: "example.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs",
        trimmedCleaned: "/nested/nested/{{droplet}}/example.ts"
      },
      {
        cleaned: "exampleWithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs",
        trimmedCleaned: "/nested/nested/{{droplet}}/exampleWithDroplet.ts"
      },
      {
        cleaned: "{{droplet}}.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs",
        trimmedCleaned: "/nested/nested/{{droplet}}/{{droplet}}.ts"
      },
      {
        cleaned: "{{droplet}}WithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs",
        trimmedCleaned: "/nested/nested/{{droplet}}/{{droplet}}WithDroplet.ts"
      },
      {
        cleaned: "example.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs",
        trimmedCleaned: "/nested/template/example.ts"
      },
      {
        cleaned: "exampleWithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs",
        trimmedCleaned: "/nested/template/exampleWithDroplet.ts"
      },
      {
        cleaned: "{{droplet}}.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs",
        trimmedCleaned: "/nested/template/{{droplet}}.ts"
      },
      {
        cleaned: "{{droplet}}WithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs",
        trimmedCleaned: "/nested/template/{{droplet}}WithDroplet.ts"
      },
      {
        cleaned: "example.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs",
        trimmedCleaned: "/nested/{{droplet}}/example.ts"
      },
      {
        cleaned: "exampleWithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs",
        trimmedCleaned: "/nested/{{droplet}}/exampleWithDroplet.ts"
      },
      {
        cleaned: "{{droplet}}.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs",
        trimmedCleaned: "/nested/{{droplet}}/{{droplet}}.ts"
      },
      {
        cleaned: "{{droplet}}WithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs",
        trimmedCleaned: "/nested/{{droplet}}/{{droplet}}WithDroplet.ts"
      },
      {
        cleaned: "example.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_file_example.ts.hbs"
        ),
        trimmed: "/droplet_file_example.ts.hbs",
        trimmedCleaned: "/example.ts"
      },
      {
        cleaned: "exampleWithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_file_exampleWithDroplet.ts.hbs"
        ),
        trimmed: "/droplet_file_exampleWithDroplet.ts.hbs",
        trimmedCleaned: "/exampleWithDroplet.ts"
      },
      {
        cleaned: "{{droplet}}.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_file_{{droplet}}.ts.hbs"
        ),
        trimmed: "/droplet_file_{{droplet}}.ts.hbs",
        trimmedCleaned: "/{{droplet}}.ts"
      },
      {
        cleaned: "{{droplet}}WithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_file_{{droplet}}WithDroplet.ts.hbs"
        ),
        trimmed: "/droplet_file_{{droplet}}WithDroplet.ts.hbs",
        trimmedCleaned: "/{{droplet}}WithDroplet.ts"
      },
      {
        cleaned: "example.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_template/droplet_file_example.ts.hbs"
        ),
        trimmed: "/droplet_template_template/droplet_file_example.ts.hbs",
        trimmedCleaned: "/template/example.ts"
      },
      {
        cleaned: "exampleWithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs",
        trimmedCleaned: "/template/exampleWithDroplet.ts"
      },
      {
        cleaned: "{{droplet}}.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_template/droplet_file_{{droplet}}.ts.hbs"
        ),
        trimmed: "/droplet_template_template/droplet_file_{{droplet}}.ts.hbs",
        trimmedCleaned: "/template/{{droplet}}.ts"
      },
      {
        cleaned: "{{droplet}}WithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs",
        trimmedCleaned: "/template/{{droplet}}WithDroplet.ts"
      },
      {
        cleaned: "example.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_{{droplet}}/droplet_file_example.ts.hbs"
        ),
        trimmed: "/droplet_template_{{droplet}}/droplet_file_example.ts.hbs",
        trimmedCleaned: "/{{droplet}}/example.ts"
      },
      {
        cleaned: "exampleWithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs",
        trimmedCleaned: "/{{droplet}}/exampleWithDroplet.ts"
      },
      {
        cleaned: "{{droplet}}.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs"
        ),
        trimmed:
          "/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs",
        trimmedCleaned: "/{{droplet}}/{{droplet}}.ts"
      },
      {
        cleaned: "{{droplet}}WithDroplet.ts",
        original: join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs"
        ),
        trimmed:
          "/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs",
        trimmedCleaned: "/{{droplet}}/{{droplet}}WithDroplet.ts"
      }
    ]);
  }));

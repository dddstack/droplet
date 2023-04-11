import { DROPLET_FILE_PREFIX } from "@dddstack/droplet-constants";
import { TESTS_DROPLET_DIRECTORY_PATH } from "@tests";

import { listFiles } from "../src";

describe("listFiles", () =>
  it(`should list all files prefixed with ${DROPLET_FILE_PREFIX} in a path`, () =>
    expect(listFiles(TESTS_DROPLET_DIRECTORY_PATH)).toEqual([
      {
        cleaned: 'example.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs',
        trimmedCleaned: '/nested/nested/template/example.ts.hbs'
      },
      {
        cleaned: 'exampleWithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs',
        trimmedCleaned: '/nested/nested/template/exampleWithDroplet.ts.hbs'
      },
      {
        cleaned: '{{droplet}}.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs',
        trimmedCleaned: '/nested/nested/template/{{droplet}}.ts.hbs'
      },
      {
        cleaned: '{{droplet}}WithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmedCleaned: '/nested/nested/template/{{droplet}}WithDroplet.ts.hbs'
      },
      {
        cleaned: 'example.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs',
        trimmedCleaned: '/nested/nested/{{droplet}}/example.ts.hbs'
      },
      {
        cleaned: 'exampleWithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs',
        trimmedCleaned: '/nested/nested/{{droplet}}/exampleWithDroplet.ts.hbs'
      },
      {
        cleaned: '{{droplet}}.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs',
        trimmedCleaned: '/nested/nested/{{droplet}}/{{droplet}}.ts.hbs'
      },
      {
        cleaned: '{{droplet}}WithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmedCleaned: '/nested/nested/{{droplet}}/{{droplet}}WithDroplet.ts.hbs'
      },
      {
        cleaned: 'example.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_template/droplet_file_example.ts.hbs',
        trimmedCleaned: '/nested/template/example.ts.hbs'
      },
      {
        cleaned: 'exampleWithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs',
        trimmedCleaned: '/nested/template/exampleWithDroplet.ts.hbs'
      },
      {
        cleaned: '{{droplet}}.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}.ts.hbs',
        trimmedCleaned: '/nested/template/{{droplet}}.ts.hbs'
      },
      {
        cleaned: '{{droplet}}WithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmedCleaned: '/nested/template/{{droplet}}WithDroplet.ts.hbs'
      },
      {
        cleaned: 'example.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_example.ts.hbs',
        trimmedCleaned: '/nested/{{droplet}}/example.ts.hbs'
      },
      {
        cleaned: 'exampleWithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs',
        trimmedCleaned: '/nested/{{droplet}}/exampleWithDroplet.ts.hbs'
      },
      {
        cleaned: '{{droplet}}.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs',
        trimmedCleaned: '/nested/{{droplet}}/{{droplet}}.ts.hbs'
      },
      {
        cleaned: '{{droplet}}WithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmed: '/droplet_directory_nested/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmedCleaned: '/nested/{{droplet}}/{{droplet}}WithDroplet.ts.hbs'
      },
      {
        cleaned: 'example.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_file_example.ts.hbs',
        trimmed: '/droplet_file_example.ts.hbs',
        trimmedCleaned: '/example.ts.hbs'
      },
      {
        cleaned: 'exampleWithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_file_exampleWithDroplet.ts.hbs',
        trimmed: '/droplet_file_exampleWithDroplet.ts.hbs',
        trimmedCleaned: '/exampleWithDroplet.ts.hbs'
      },
      {
        cleaned: '{{droplet}}.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_file_{{droplet}}.ts.hbs',
        trimmed: '/droplet_file_{{droplet}}.ts.hbs',
        trimmedCleaned: '/{{droplet}}.ts.hbs'
      },
      {
        cleaned: '{{droplet}}WithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmed: '/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmedCleaned: '/{{droplet}}WithDroplet.ts.hbs'
      },
      {
        cleaned: 'example.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_template/droplet_file_example.ts.hbs',
        trimmed: '/droplet_template_template/droplet_file_example.ts.hbs',
        trimmedCleaned: '/template/example.ts.hbs'
      },
      {
        cleaned: 'exampleWithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs',
        trimmed: '/droplet_template_template/droplet_file_exampleWithDroplet.ts.hbs',
        trimmedCleaned: '/template/exampleWithDroplet.ts.hbs'
      },
      {
        cleaned: '{{droplet}}.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_template/droplet_file_{{droplet}}.ts.hbs',
        trimmed: '/droplet_template_template/droplet_file_{{droplet}}.ts.hbs',
        trimmedCleaned: '/template/{{droplet}}.ts.hbs'
      },
      {
        cleaned: '{{droplet}}WithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmed: '/droplet_template_template/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmedCleaned: '/template/{{droplet}}WithDroplet.ts.hbs'
      },
      {
        cleaned: 'example.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_{{droplet}}/droplet_file_example.ts.hbs',
        trimmed: '/droplet_template_{{droplet}}/droplet_file_example.ts.hbs',
        trimmedCleaned: '/{{droplet}}/example.ts.hbs'
      },
      {
        cleaned: 'exampleWithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs',
        trimmed: '/droplet_template_{{droplet}}/droplet_file_exampleWithDroplet.ts.hbs',
        trimmedCleaned: '/{{droplet}}/exampleWithDroplet.ts.hbs'
      },
      {
        cleaned: '{{droplet}}.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs',
        trimmed: '/droplet_template_{{droplet}}/droplet_file_{{droplet}}.ts.hbs',
        trimmedCleaned: '/{{droplet}}/{{droplet}}.ts.hbs'
      },
      {
        cleaned: '{{droplet}}WithDroplet.ts.hbs',
        original: '/Users/durk/Documents/code/dddstack/code/droplet/tests/droplet/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmed: '/droplet_template_{{droplet}}/droplet_file_{{droplet}}WithDroplet.ts.hbs',
        trimmedCleaned: '/{{droplet}}/{{droplet}}WithDroplet.ts.hbs'
      }
    ])
  )
);

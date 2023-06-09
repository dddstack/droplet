import { join } from "path";

import { trim } from "../src/lib";
import { TESTS_DROPLET_DIRECTORY_PATH } from "./_tests";

describe("trim", () =>
  it("should trim a path", () =>
    expect(
      trim(
        join(
          TESTS_DROPLET_DIRECTORY_PATH,
          "droplet_directory_nested/droplet_directory_nested/droplet_template_template"
        ),
        TESTS_DROPLET_DIRECTORY_PATH
      )
    ).toBe(
      "/droplet_directory_nested/droplet_directory_nested/droplet_template_template"
    )));

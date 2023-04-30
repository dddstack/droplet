import { clean, DROPLET_TEMPLATE_PREFIX } from "../src/lib";

describe("clean", () =>
  it("should clean a path", () =>
    expect(
      clean(
        DROPLET_TEMPLATE_PREFIX +
          "droplet_directory_nested/droplet_directory_nested/droplet_template_template"
      )
    ).toEqual("nested/nested/template")));

import { DROPLET_TEMPLATE_PREFIX } from "@dddstack/droplet-constants";

import { clean } from "../dist";

describe("clean", () =>
  it("should clean a path", () =>
    expect(
      clean(
        `${DROPLET_TEMPLATE_PREFIX}droplet_directory_nested/droplet_directory_nested/droplet_template_template`
      )
    ).toEqual("nested/nested/template")));

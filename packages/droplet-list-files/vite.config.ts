import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [tsconfigPaths({ loose: true })],
  test: {
    globals: true,
  }
});

export default config;

import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  entry: {
    index: "src/index.ts",
  },
  splitting: false,
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
});

export default tsupConfig;

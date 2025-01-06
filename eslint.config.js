import baseConfig from "@mgcrea/eslint-config-react";

const config = [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.json"],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

export default config;

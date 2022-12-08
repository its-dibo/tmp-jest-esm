import type { Config } from "@jest/types";

let config: Config.InitialOptions = {
  rootDir: __dirname,
  // use 'ts-jest' or 'ts-jest/presets/*' to enable type checking while testing
  // https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  injectGlobals: true,
  onlyChanged: false,
  collectCoverage: false,
  moduleDirectories: ["node_modules", "types"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "html",
    "scss",
    "css",
    "node",
    "mjs",
    "cjs",
    "mts",
    "cts",
  ],
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { useESM: true }],
  },

  modulePathIgnorePatterns: ["dist"],
};
export default config;

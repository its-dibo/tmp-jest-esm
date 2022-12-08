import type { Config } from "@jest/types";

let config: Config.InitialOptions = {
  rootDir: __dirname,
  // use 'ts-jest' to enable type checking while testing
  preset: "ts-jest",
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
  ],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },

  modulePathIgnorePatterns: ["dist"],
};
export default config;

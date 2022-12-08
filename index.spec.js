import { test, expect } from "@jest/globals";

// top-level await (ES)
// jest for ESM https://jestjs.io/docs/ecmascript-modules
await Promise.resolve("");

test("example", () => {
  expect(true).toBeTruthy();
});

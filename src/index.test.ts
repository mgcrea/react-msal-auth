import { describe, expect, it } from "vitest";
import * as module from "./index";

describe("index", () => {
  it("should have a stable API surface", () => {
    const exportedKeys = Object.keys(module);
    expect(exportedKeys).toMatchInlineSnapshot(`
      [
        "msalConfigDefaults",
        "createMsalInstance",
        "useMicrosoftLogin",
        "useMicrosoftSilentRefreshToken",
        "MicrosoftIcon",
        "isAccountTokenExpired",
        "pickAccountInfo",
        "MsalProvider",
        "useMsal",
      ]
    `);
  });
});

import { describe, expect, it } from "vitest";
import * as module from "./index";

describe("index", () => {
  it("should have a stable API surface", () => {
    const exportedKeys = Object.keys(module);
    expect(exportedKeys).toMatchInlineSnapshot(`
      [
        "msalConfigDefaults",
        "createMsalInstance",
        "useMsalAcquireToken",
        "useMsalLogin",
        "MicrosoftIcon",
        "isAccountTokenExpired",
        "pickAccountInfo",
        "MsalProvider",
        "useAccount",
        "useIsAuthenticated",
        "useMsal",
        "useMsalAuthentication",
      ]
    `);
  });
});

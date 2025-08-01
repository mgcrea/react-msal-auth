import { describe, expect, it } from "vitest";
import * as module from "./index";

describe("index", () => {
  it("should have a stable API surface", () => {
    const exportedKeys = Object.keys(module);
    expect(exportedKeys).toMatchInlineSnapshot(`
      [
        "MicrosoftIcon",
        "MsalProvider",
        "createMsalInstance",
        "isAccountTokenExpired",
        "msalConfigDefaultsFactory",
        "pickAccountInfo",
        "useAccount",
        "useIsAuthenticated",
        "useMsal",
        "useMsalAcquireToken",
        "useMsalAuthentication",
        "useMsalLogin",
      ]
    `);
  });
});

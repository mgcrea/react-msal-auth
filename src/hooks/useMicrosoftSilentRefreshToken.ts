import { InteractionType, type AccountInfo } from "@azure/msal-browser";
import { useMsalAuthentication } from "@azure/msal-react";
import { useCallback } from "react";
import { assert, pick } from "src/utils";

export const useMicrosoftSilentRefreshToken = (scopes: string[]) => {
  const { acquireToken } = useMsalAuthentication(InteractionType.Silent, { scopes });
  return useCallback(
    async (account: AccountInfo) => {
      const accountInfo = pick(account, [
        "homeAccountId",
        "environment",
        "tenantId",
        "username",
        "localAccountId",
      ]);
      const res = await acquireToken(InteractionType.Silent, {
        account: accountInfo,
        scopes,
      });
      assert(res && res.idToken, "No idToken found in acquireToken response");
      return res.idToken;
    },
    [acquireToken, scopes],
  );
};

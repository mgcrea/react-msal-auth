import { InteractionType, type AccountInfo } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { useCallback } from "react";
import { assert, pick } from "../utils";

export const useMsalAcquireToken = (
  scopes: string[],
  interactionType: InteractionType = InteractionType.Silent,
) => {
  const acquireToken = useAcquireToken(interactionType);
  return useCallback(
    async (account: AccountInfo) => {
      const accountInfo = pick(account, [
        "homeAccountId",
        "environment",
        "tenantId",
        "username",
        "localAccountId",
      ]);
      const res = await acquireToken({
        account: accountInfo,
        scopes,
      });
      assert(res && res.idToken, "No idToken found in acquireToken response");
      return res.idToken;
    },
    [acquireToken, scopes],
  );
};

const useAcquireToken = (interactionType: InteractionType = InteractionType.Silent) => {
  const { instance: msalInstance } = useMsal();
  switch (interactionType) {
    case InteractionType.Popup:
      return msalInstance.acquireTokenPopup.bind(msalInstance);
    case InteractionType.Redirect:
      return msalInstance.acquireTokenRedirect.bind(msalInstance);
    case InteractionType.Silent:
    default:
      return msalInstance.acquireTokenSilent.bind(msalInstance);
  }
};

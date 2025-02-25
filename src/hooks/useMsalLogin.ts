// @docs https://learn.microsoft.com/en-us/samples/azure-samples/ms-identity-ciam-javascript-tutorial/ms-identity-ciam-javascript-tutorial-1-sign-in-react/

import type { AccountInfo, PopupRequest } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { useCallback, useEffect } from "react";
import { assert, isAccountTokenExpired } from "../utils";
import { useMsalAcquireToken } from "./useMsalAcquireToken";

export type UseMsalLoginOptions = Pick<PopupRequest, "loginHint" | "domainHint"> & {
  autoLogin?: boolean;
  onLogin?: (account: AccountInfo) => void | Promise<void>;
  scopes: string[];
};

export const useMsalLogin = ({ autoLogin, onLogin, scopes, ...request }: UseMsalLoginOptions) => {
  const { instance: msalInstance } = useMsal();
  const acquireToken = useMsalAcquireToken(scopes);

  // Automatically login the user if they have an active account and have not logged out
  useEffect(() => {
    const runEffect = async () => {
      const account = msalInstance.getActiveAccount();
      if (!account?.idToken) {
        return;
      }
      // Check for expired idToken
      let idToken: string = account.idToken;
      if (isAccountTokenExpired(account)) {
        console.warn("idToken is expired");
        idToken = await acquireToken(account);
      }
      if (autoLogin && onLogin) {
        await onLogin({ ...account, idToken });
      }
    };

    void runEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = useCallback(async () => {
    await msalInstance.loginPopup({ scopes, ...request });
    const accounts = msalInstance.getAllAccounts();
    const account = request.loginHint ? accounts.find((a) => a.username === request.loginHint) : accounts[0];
    assert(account, `No account found for loginHint: ${request.loginHint}`);
    msalInstance.setActiveAccount(account);
    if (onLogin) {
      await onLogin(account);
    }
  }, [msalInstance, scopes, request, onLogin]);

  return { login };
};

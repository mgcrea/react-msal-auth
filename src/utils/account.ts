import type { AccountInfo } from "@azure/msal-browser";
import { assert } from "./assert";
import { pick } from "./object";

export const isAccountTokenExpired = (account: AccountInfo) => {
  const { idTokenClaims: claims } = account;
  assert(claims, "No idTokenClaims found in account");
  const isExpired = (claims.exp ?? 0) * 1000 < Date.now();
  return isExpired;
};

export const pickAccountInfo = (account: AccountInfo) =>
  pick(account, ["homeAccountId", "environment", "tenantId", "username", "localAccountId"]);

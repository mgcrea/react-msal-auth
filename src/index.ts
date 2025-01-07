export * from "./config/instance";
export * from "./hooks";
export * from "./icons";
export * from "./utils/account";

export type { Configuration } from "@azure/msal-browser";
export {
  MsalProvider,
  useAccount,
  useIsAuthenticated,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";

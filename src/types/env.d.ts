/* eslint-disable @typescript-eslint/consistent-type-definitions */

interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly VITE_MSAL_CLIENT_ID?: string;
  readonly VITE_MSAL_TENANT_ID?: string;
  readonly VITE_MSAL_REDIRECT_URI?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

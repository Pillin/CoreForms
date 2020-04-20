export const RECAPTCHA_KEY = "6Ld6k8MUAAAAADHcpto69rCUxyswtfLDrR6rjGE3";

export const ERROR_SCRIPT_NOT_AVAILABLE = "Google recaptcha is not available";
export const ERROR_NOT_A_WEB_BROWSER = "Running outside a web browser";

export const GOOGLE_RECAPTCHA_V3_SCRIPT =
  "https://www.google.com/recaptcha/api.js";

export const SCRIPT_ID = "google-recaptcha-v3";
export const GOOGLE_RECAPTCHA_BADGE_CLASSNAME = ".grecaptcha-badge";

export const isBrowser = typeof window !== "undefined";

export interface IGoogleReCaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options?: { action: string }) => Promise<string>;
}

export interface IProjectWindow extends Window {
  grecaptcha: IGoogleReCaptcha;
}

export interface IGoogleReCaptchaOptions {
  siteKey: string;
  language?: string;
  loadOnStart?: boolean;
  action?: string;
}

export interface IGoogleReCaptchaV3HookReturn {
  reCaptchaResponseToken?: string;
  executeReCaptcha: (action?: string) => Promise<string>;
}

export type TGoogleReCaptchaV3Hook = (
  options: IGoogleReCaptchaOptions
) => IGoogleReCaptchaV3HookReturn;

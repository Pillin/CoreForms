import { isBrowser } from "./definitions";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export const getProjectWindow = () =>
  isBrowser ? (window as Window) : undefined;

export const getHeadTag = () => {
  const window = getProjectWindow();
  if (window) {
    return window.document.getElementsByTagName("head")[0];
  }
  return undefined;
};

export const injectScript = (id: string, src: string, onload?: () => void) => {
  const window = getProjectWindow();
  const headTag = getHeadTag();
  if (headTag) {
    const scriptTag = window?.document.createElement("script");
    if (!scriptTag) return false;
    scriptTag.id = id;
    scriptTag.src = src;

    if (onload) {
      scriptTag.onload = onload;
    }

    if ("async" in scriptTag) {
      scriptTag.async = true;
    }

    if ("defer" in scriptTag) {
      scriptTag.defer = true;
    }
    headTag.appendChild(scriptTag);
    return true;
  }
  return false;
};

export const removeScript = (id: string) => {
  const window = getProjectWindow();
  if (window) {
    const scriptTag = window.document.getElementById(id);
    if (scriptTag) {
      scriptTag.remove();
      return true;
    }
  }
  return false;
};

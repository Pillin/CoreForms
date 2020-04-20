import React, { useEffect } from "react";

import { getProjectWindow, injectScript, removeScript } from "./html-dom";
import {
  TGoogleReCaptchaV3Hook,
  ERROR_NOT_A_WEB_BROWSER,
  ERROR_SCRIPT_NOT_AVAILABLE,
  GOOGLE_RECAPTCHA_BADGE_CLASSNAME,
  SCRIPT_ID,
  GOOGLE_RECAPTCHA_V3_SCRIPT,
  RECAPTCHA_KEY,
} from "./definitions";

const useGoogleReCaptchaV3: TGoogleReCaptchaV3Hook = ({
  siteKey,
  language,
  loadOnStart = false,
  action,
}) => {
  const [responseToken, setResponseToken] = React.useState<string>();

  const executeReCaptcha = React.useCallback(
    async (action?: string): Promise<string> => {
      const window = getProjectWindow();

      if (!window) {
        throw new Error(ERROR_NOT_A_WEB_BROWSER);
      }

      const { grecaptcha } = window;
      if (!grecaptcha) {
        throw new Error(ERROR_SCRIPT_NOT_AVAILABLE);
      }

      return new Promise((resolve) => {
        grecaptcha.ready(() => {
          grecaptcha
            .execute(siteKey, { action })
            .then((token: string) => resolve(token));
        });
      });
    },
    [siteKey]
  );

  const removeGReCaptchaDivElement = () => {
    const window = getProjectWindow();
    if (!window) {
      return;
    }

    let element = window.document.querySelector(
      GOOGLE_RECAPTCHA_BADGE_CLASSNAME
    );
    if (element && element.parentElement) {
      element.parentElement.remove();
    }
  };

  const onLoadInjectedScript = async () => {
    if (!loadOnStart || !action) {
      return;
    }

    try {
      const token = await executeReCaptcha(action);
      setResponseToken(token);
    } catch (e) {
      console.warn(e);
    }
  };

  React.useEffect(() => {
    if (!siteKey) {
      return;
    }

    const window = getProjectWindow();
    const scriptTag = window?.document.getElementById(SCRIPT_ID);

    if (!scriptTag) {
      injectScript(
        SCRIPT_ID,
        `${GOOGLE_RECAPTCHA_V3_SCRIPT}?render=${siteKey}${
          language ? `&hl=${language}` : ""
        }`,
        onLoadInjectedScript
      );
    }

    return () => {
      removeScript(SCRIPT_ID);
      removeGReCaptchaDivElement();
    };
  }, [siteKey, language]);

  return { executeReCaptcha, reCaptchaResponseToken: responseToken };
};

export const useCaptcha = (props: {
  tokenNumber: number;
  loadOnStart?: boolean;
  action: string;
}) => {
  const { tokenNumber, action, loadOnStart = false } = props;
  const [token, setToken] = React.useState<string>();
  const siteKey = RECAPTCHA_KEY;

  const { executeReCaptcha, reCaptchaResponseToken } = useGoogleReCaptchaV3({
    siteKey,
    action,
    loadOnStart,
  });

  const getToken = async () => {
    const token = await executeReCaptcha(action);
    setToken(token);
  };

  useEffect(() => {
    if (siteKey && window.grecaptcha) {
      getToken();
    }
  }, [siteKey, tokenNumber]);

  useEffect(() => {
    if (reCaptchaResponseToken) {
      setToken(reCaptchaResponseToken);
    }
  }, [reCaptchaResponseToken]);

  return token;
};

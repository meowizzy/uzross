import { useEffect, useState } from "react";
import {
  __IS_MOBILE__,
  __IS_TABLET__,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
} from "@shared/const/common";

export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(__IS_MOBILE__);
  const [isTablet, setIsTablet] = useState(__IS_TABLET__);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.screen.availWidth <= MOBILE_MAX_WIDTH);
      setIsTablet(
        window.screen.availHeight <= TABLET_MAX_WIDTH &&
          window.screen.availHeight > MOBILE_MAX_WIDTH,
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isTablet]);

  return {
    isMobile,
    isTablet,
  };
};

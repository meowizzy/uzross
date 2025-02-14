import { SocialsCode } from "@shared/api/companyInfo/model";
import FacebookIcon from "@assets/svg/facebook.svg";
import InstagramIcon from "@assets/svg/instagram.svg";
import TelegramIcon from "@assets/svg/telegram.svg";
import TwitterIcon from "@assets/svg/twitter.svg";

export const getSocialIconByCode = (code: SocialsCode) => {
  switch (code) {
    case "TELEGRAM":
      return <TelegramIcon />;
    case "FACEBOOK":
      return <FacebookIcon />;
    case "TWITTER":
      return <TwitterIcon />;
    case "INSTAGRAM":
      return <InstagramIcon />;
  }
};

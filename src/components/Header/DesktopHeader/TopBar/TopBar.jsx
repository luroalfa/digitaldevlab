import { useTranslation } from "react-i18next";
import {
  TopBarWrapper,
  MarqueeWrapper,
  MarqueeTrack,
  StyledCountdown,
} from "./TopBarStyles";

const getTimeUntilNovember = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  let targetDate = new Date(currentYear, 11, 31, 23, 59, 59, 999); 
  if (now.getTime() > targetDate.getTime()) {
    targetDate = new Date(currentYear + 1, 11, 31, 23, 59, 59, 999);
  }
  return targetDate.getTime();
};

const deadline = getTimeUntilNovember();

const TopBar = () => {
  const { t } = useTranslation();
  const onFinish = () => console.log("Temporizador finalizado");

  const daysLabel = t("topBar.days");
  const format = `D [${daysLabel}] HH:mm:ss`;

  const content = (
    <>
      📱 {t("topBar.phone")}: +506 7003 1154 &nbsp;|&nbsp;
      📍 {t("topBar.address")}: Alajuela, Costa Rica
      &nbsp;|&nbsp;
      📧 {t("topBar.email")}: info@digitaldevlab.com &nbsp;|&nbsp;
      🏷️ <strong>{t("topBar.specialOffer")}</strong>
      &nbsp;|&nbsp;
      <strong>{t("topBar.offerEndsIn")}:</strong>
      <StyledCountdown value={deadline} onFinish={onFinish} format={format} />
    </>
  );

  return (
    <TopBarWrapper>
      <MarqueeWrapper>
        <MarqueeTrack>
          {content}
          {content}
          {content}
          {content}
          {content}
          {content}
        </MarqueeTrack>
      </MarqueeWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;

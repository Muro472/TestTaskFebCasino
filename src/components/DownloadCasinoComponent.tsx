import { useTranslation } from "react-i18next";
import CasinoRoyalSmallImage from "../assets/CasinoRoyalSmall.png";
import { InstallAppButton } from "./buttons/InstallAppButton";
import InstallAppButtonIcon from "../assets/InstallAppButtonIcon.png";

export const DownloadCasinoComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="download_casino_component  p-[24px] flex flex-col items-center gap-[36px]">
      <img src={CasinoRoyalSmallImage} alt="CasinoRoyalSmallImage" />

      <div className="flex flex-col items-center gap-[18px]">
        <div className="flex flex-col items-center gap-[6px]">
          <label className="text-[32px] font-[860]">
            {t("DownloadCasino")}
          </label>
          <label className="text-[16px] font-[590] color-[#6B6B6B]">
            {t("PlayMinAnywhereAnytime")}
          </label>
        </div>
        <InstallAppButton
          sx={{
            backgroundImage: t("BackgroundImage"),
          }}
          startIcon={
            <img
              className="h-[40px]"
              src={InstallAppButtonIcon}
              alt="Install App"
            />
          }
        >
          {t("InstallApp")}
        </InstallAppButton>
      </div>
    </div>
  );
};

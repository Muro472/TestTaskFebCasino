import { DownloadCasinoComponent } from "./DownloadCasinoComponent";
import OlderThenEighteen from "../assets/OlderThenEighteen.png";
import AnjouanGamingAuthority from "../assets/AnjouanGamingAuthority.png";

import InstaIcon from "../assets/socials/InstaIcon.png";
import MailIcon from "../assets/socials/MailIcon.png";
import TelegramIcon from "../assets/socials/TelegramIcon.png";
import XIcon from "../assets/socials/XIcon.png";
import classNames from "classnames";
import AGuy from "../assets/AGuy.png";
import { useTranslation } from "react-i18next";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import React, { useEffect } from "react";
import i18next from "i18next";
import { LanguageSelectInput } from "./inputs/LanguageSelectInput";

const Socials: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames({
        "flex items-end flex-col gap-[12px]": !mobile,
        "flex items-center flex-col gap-[12px]": mobile,
      })}
    >
      <div>{t("UsOnSocialMedia")}</div>

      <div className="flex gap-[4px]">
        <img src={InstaIcon} alt="InstaIcon" className="cursor-pointer" />

        <img src={MailIcon} alt="MailIcon" className="cursor-pointer" />

        <img src={TelegramIcon} alt="TelegramIcon" className="cursor-pointer" />

        <img src={XIcon} alt="XIcon" className="cursor-pointer" />
      </div>
    </div>
  );
};

const LanguageSelector = () => {
  const [lang, setLang] = React.useState("en");

  useEffect(() => {
    i18next.changeLanguage(lang);
  }, [lang]);

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          value={lang}
          label="region"
          onChange={handleChange}
          input={<LanguageSelectInput />}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const InfoItems: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames({
        "flex flex-col gap-[24px]": !mobile,
        "flex flex-row gap-[24px] flex-wrap justify-center": mobile,
      })}
    >
      <div
        className={classNames("", {
          "flex flex-col items-center gap-[12px] w-[287px]": mobile,
          "flex items-center gap-[12px]": !mobile,
        })}
      >
        <img
          src={OlderThenEighteen}
          alt="OlderThenEighteen"
          className="w-[58px]"
        />
        <label className="text-[16px] font-[400] text-[#FBFBFBB2]">
          {t("Only18Plus")}
        </label>
      </div>

      <div
        className={classNames("", {
          "flex flex-col items-center gap-[12px] w-[287px]": mobile,
          "flex items-center gap-[12px]": !mobile,
        })}
      >
        <img
          src={AnjouanGamingAuthority}
          alt="AnjouanGamingAuthority"
          className="w-[58px]"
        />
        <label className="text-[16px] font-[400] text-[#FBFBFBB2] w-[200px]">
          {t("CasinoIsCertifiedByTheAnjouanGamingAuthority")}
        </label>
      </div>
    </div>
  );
};

export const BottomComponent = () => {
  return (
    <div>
      <div className="w-full bottom_component xl:flex justify-between items-center py-[61px] px-[32px] hidden">
        <div className="flex items-center gap-[38px]">
          <img src={AGuy} alt="AGuy" />
          <DownloadCasinoComponent />
          <InfoItems />
        </div>

        <div className="flex flex-col items-end">
          <div className="mb-[108px]">
            <LanguageSelector />
          </div>

          <Socials />
        </div>
      </div>

      <div className="w-full bottom_component flex flex-col justify-center items-center py-[61px] px-[32px] xl:hidden">
        <DownloadCasinoComponent />
        <div className="mt-[52px]">
          <LanguageSelector />
        </div>

        <div className="mt-[60px]">
          <Socials mobile={true} />
        </div>

        <div className="mt-[52px]">
          <InfoItems mobile={true} />
        </div>
      </div>
    </div>
  );
};

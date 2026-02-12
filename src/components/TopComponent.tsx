import { useTranslation } from "react-i18next";
import CasinoRoyalBig from "../assets/CasinoRoyalBig.png";
import SlotMachine from "../assets/SlotMachine.png";
import { OpenTheGameButton } from "./buttons/OpenTheGameButton";
import React from "react";
import type { TransitionProps } from "@mui/material/transitions";
import { AppBar, Dialog, IconButton, Slide, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const TopComponent = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="top_component w-full flex flex-col items-center pt-[240px] pb-[240px]">
      <div className="flex flex-col items-center">
        <img
          src={CasinoRoyalBig}
          alt="CasinoRoyalBig"
          className="w-[263px] object-cover"
        />
        <img
          src={SlotMachine}
          alt="SlotMachine"
          className="w-[326px] object-cover mt-[32px]"
        />

        <div className="pt-[24px] z-[1000]">
          <OpenTheGameButton onClick={handleClickOpen}>
            {t("OpenTheGame")}
          </OpenTheGameButton>
        </div>
      </div>

      {open && (
        <Dialog
          className="relative"
          fullScreen
          open={open}
          onClose={handleClose}
          slots={{
            transition: Transition,
          }}
        >
          <div className="absolute top-[-5px] right-[50px] z-[1000]">
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </div>

          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="100%"
            src="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
          ></iframe>
        </Dialog>
      )}
    </div>
  );
};

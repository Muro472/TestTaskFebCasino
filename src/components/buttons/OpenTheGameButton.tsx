import Button, { type ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const OpenTheGameButton = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  backgroundImage: "linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)",
  width: "343px",
  height: "56px",
  borderRadius: "12px",
  fontSize: "16px",
  lineHeight: "22px",
  "&:hover": {
    backgroundColor: "red",
  },
}));

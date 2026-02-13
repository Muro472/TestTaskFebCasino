import Button, { type ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const OpenTheGameButton = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  width: "343px",
  height: "56px",
  borderRadius: "12px",
  fontSize: "16px",
  lineHeight: "22px",
  "&:hover": {
    backgroundColor: "red",
  },
}));

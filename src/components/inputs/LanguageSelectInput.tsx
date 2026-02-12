import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

export const LanguageSelectInput = styled(InputBase)(() => ({
  color: "#BABABA",
  backgroundColor: "#FFFFFF1A",
  width: "289px",
  height: "56px",
  padding: "16px",

  fontSize: "16px",
  fontWeight: "400",

  border: "1px solid #FFFFFF1A",
  backdropFilter: "blur(10px)",
  borderRadius: "8px",

  "& .MuiSvgIcon-root": {
    color: "#BABABA",
  },

  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
}));

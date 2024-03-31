import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const FlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(1),
}));

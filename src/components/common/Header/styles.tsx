import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const HeaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const FlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.up("md")]: {
    fontSize: 24,
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: 18,
  },
}));

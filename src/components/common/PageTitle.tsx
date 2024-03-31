import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

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

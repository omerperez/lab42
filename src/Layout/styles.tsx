import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export const PageWrapper = styled(Box)(({ theme: { spacing } }) => ({
  flexGrow: spacing(1),
  padding: spacing(3, 2),
  position: "relative",
  flex: 1,
  minHeight: "100vh",
}));

import { Alert } from "@/components/common";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CommentsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  maxHeight: 300,
  overflowY: "scroll",
  overflowX: "hidden",
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.secondary.main,
}));

export const LoadCommentsButton = styled(Button)({
  textDecoration: "underline",
});

export const CommentsErrorAlert = styled(Alert)({
  borderRadius: 0,
  minHeight: 100,
  alignItems: "center",
  justifyContent: "center",
});

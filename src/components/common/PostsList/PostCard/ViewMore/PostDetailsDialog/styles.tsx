import { Alert } from "@/components/common";
import { DialogContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3, 5),
}));

export const PostDetailsAlertError = styled(Alert)({
  minHeight: 400,
  alignItems: "center",
  justifyContent: "center",
});

export const CommentsTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1, 2),
  color: theme.palette.background.default,
}));

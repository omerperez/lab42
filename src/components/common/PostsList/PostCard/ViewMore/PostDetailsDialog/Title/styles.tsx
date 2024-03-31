import { Box, DialogTitle, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleWrapper = styled(DialogTitle)(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: spacing(2),
}));

export const TitleContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  gap: spacing(1),
  alignItems: "center",
}));

export const UserProfileImage = styled("img")(({ theme }) => ({
  border: "solid 1px",
  borderColor: theme.palette.primary.main,
  borderRadius: "50%",
  padding: theme.spacing(1),
  width: 60,
}));

const EXIT_ICON_BUTTON_SIZE = 40;

export const ExitIconButton = styled(IconButton)({
  height: EXIT_ICON_BUTTON_SIZE,
  width: EXIT_ICON_BUTTON_SIZE,
});

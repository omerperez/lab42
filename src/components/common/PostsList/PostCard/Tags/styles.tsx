import { HEX_OPACITY_10_CODE } from "@/constants";
import { Box, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TagsContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  gap: spacing(1),
}));

export const TagChip = styled(Chip)(({ theme: { palette } }) => ({
  border: "solid 1px",
  borderColor: palette.grey[500],
  color: palette.primary.main,
  backgroundColor: palette.primary.main + HEX_OPACITY_10_CODE,
  "& .MuiAvatar-root": {
    backgroundColor: palette.secondary.main,
    color: palette.primary.main,
  },
}));

import { Box, Button, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const FlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  alignItems: "end",
}));

export const SearchInputWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.65),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.85),
  },
  width: "100%",
  maxWidth: 350,
}));

export const SearchInputBase = styled(TextField)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
  "& .MuiInputBase-root": {
    fontSize: 14,
    maxHeight: 35,
  },
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SearchButton = styled(Button)({
  maxHeight: 32,
  borderRadius: 2,
  boxShadow: "none",
});

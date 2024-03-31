import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardWrapper = styled(Box)(({ theme: { spacing } }) => ({
  padding: spacing(0.5, 1),
}));

interface CardContainerProps {
  active?: boolean;
}

export const CardContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<CardContainerProps>(({ theme, active = false }) => {
  const conditionalActiveStyle = active
    ? {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      }
    : {
        color: theme.palette.text.primary,
        borderColor: theme.palette.secondary.main,
      };
  return {
    marginRight: theme.spacing(2),
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
    border: "solid 1px",
    boxShadow: "#CDBCFF 0px 1px 2px 0px, #CDBCFF 0px 1px 3px 1px",
    ...conditionalActiveStyle,
    "& .MuiChip-label": {
      color: conditionalActiveStyle.color,
    },
  };
});

export const CardTitleContaienr = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& .MuiCheckbox-root": {
    color: theme.palette.primary.main,
  },
}));

export const CardTitle = styled(Typography)({
  fontWeight: "bold",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const CardContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: theme.spacing(1),
}));

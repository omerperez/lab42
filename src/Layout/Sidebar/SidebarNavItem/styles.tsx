import { ListItemButton, ListItemIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)({
  textDecoration: "none",
});

export const SidebarItemButton = styled(ListItemButton)(
  ({ theme, selected }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    color: theme.palette.action.active,
    ...(selected && {
      color: theme.palette.action.selected,
      "& svg": {
        color: theme.palette.action.selected,
      },
    }),
  }),
);

export const SidebarItemIcon = styled(ListItemIcon)({
  minWidth: 40,
});

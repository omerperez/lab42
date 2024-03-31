import { ListItem, ListItemText, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { memo } from "react";
import { CustomLink, SidebarItemButton, SidebarItemIcon } from "./styles";

interface SidebarLinkItemProps {
  children: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  to: string;
  isActive: boolean;
}

export const SidebarLinkItem = memo(
  ({ icon: Icon, children, to, isActive }: SidebarLinkItemProps) => (
    <CustomLink to={to}>
      <ListItem disableGutters>
        <SidebarItemButton disableGutters selected={isActive}>
          <SidebarItemIcon>
            <Icon />
          </SidebarItemIcon>
          <ListItemText primary={children} />
        </SidebarItemButton>
      </ListItem>
    </CustomLink>
  ),
);

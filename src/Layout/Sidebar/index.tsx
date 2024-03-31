import { PATHS, SIDEBAR } from "@/constants";
import { useLocation } from "@/hooks";
import { GradeOutlined, HomeOutlined } from "@mui/icons-material";
import { Divider, List } from "@mui/material";
import { SidebarLinkItem } from "./SidebarNavItem";
import { CustomDrawer, SidebarFooter, SidebarTitle } from "./styles";

export const Sidebar = () => {
  const { isFavoritePage } = useLocation();

  return (
    <CustomDrawer variant="permanent" anchor="left">
      <SidebarTitle>{SIDEBAR.TITLE}</SidebarTitle>
      <Divider />
      <List>
        <SidebarLinkItem
          icon={HomeOutlined}
          to={PATHS.HOME}
          isActive={!isFavoritePage}
        >
          {SIDEBAR.HOME}
        </SidebarLinkItem>
        <SidebarLinkItem
          icon={GradeOutlined}
          to={PATHS.FAVORITE}
          isActive={isFavoritePage}
        >
          {SIDEBAR.FAVORITE}
        </SidebarLinkItem>
      </List>
      <SidebarFooter>
        <img src="/lab42.png" width={100} />
      </SidebarFooter>
    </CustomDrawer>
  );
};

import { Box, Drawer, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const DRAWER_WIDTH = 240;

export const CustomDrawer = styled(Drawer)(({ theme: { spacing } }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: DRAWER_WIDTH,
    boxSizing: "border-box",
    padding: spacing(4, 2),
    textAlign: "center",
    gap: spacing(2),
    boxShadow: "#CDBCFF 0px 1px 2px 0px, #CDBCFF 0px 1px 3px 1px",
  },
  position: "relative",
}));

export const SidebarTitle = styled(Typography)({
  fontSize: 28,
  fontWeight: "bold",
});

export const SidebarFooter = styled(Box)({
  position: "absolute",
  bottom: 30,
  left: 0,
  right: 0,
});

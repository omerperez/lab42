import { theme } from "@/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { LayoutWrapper, PageWrapper } from "./styles";

export const Layout = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <CssBaseline enableColorScheme />
    <LayoutWrapper>
      <Sidebar />
      <PageWrapper component="main">
        <Outlet />
      </PageWrapper>
    </LayoutWrapper>
  </ThemeProvider>
);

import { Divider } from "@mui/material";
import { ReactElement } from "react";
import { HeaderWrapper } from "./styles";

interface HeaderProps {
  children: ReactElement;
}

export const Header = ({ children }: HeaderProps) => (
  <HeaderWrapper>
    {children}
    <Divider />
  </HeaderWrapper>
);

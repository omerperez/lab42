import { BasicUserInfo } from "@/types";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import { UserDetails } from "./UserDetails";
import {
  ExitIconButton,
  TitleContainer,
  TitleWrapper,
  UserProfileImage,
} from "./styles";

interface TitleProps {
  basicUserInfo: BasicUserInfo;
  children: string;
  onClose: () => void;
}
export const Title = ({ basicUserInfo, children, onClose }: TitleProps) => (
  <TitleWrapper>
    <TitleContainer>
      <UserProfileImage alt="user-profile" src={basicUserInfo.image} />
      <Box fontSize={24}>
        {children}
        <UserDetails {...basicUserInfo} />
      </Box>
    </TitleContainer>
    <ExitIconButton color="error" onClick={onClose}>
      <Close />
    </ExitIconButton>
  </TitleWrapper>
);

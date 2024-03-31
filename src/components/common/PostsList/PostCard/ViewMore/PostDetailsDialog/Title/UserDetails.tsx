import { BasicUserInfo } from "@/types";
import { Box, Divider } from "@mui/material";

export const UserDetails = ({
  email,
  phone,
  firstName,
  lastName,
}: BasicUserInfo) => (
  <Box display="flex" gap={1} alignItems="center" fontSize={12}>
    <strong>{`${firstName} ${lastName}`}</strong>
    <Divider orientation="vertical" flexItem />
    <span>{email}</span>
    <Divider orientation="vertical" flexItem />
    <span>{phone}</span>
  </Box>
);

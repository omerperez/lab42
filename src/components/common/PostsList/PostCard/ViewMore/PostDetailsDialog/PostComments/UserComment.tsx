import { Comment } from "@/types";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import { Box, Typography } from "@mui/material";

export const UserComment = ({ user, body }: Comment) => (
  <Box>
    <Typography variant="subtitle1">{user.username}</Typography>
    <Typography fontSize={14}>{capitalizeFirstLetter(body)}</Typography>
  </Box>
);

import { Box, Skeleton } from "@mui/material";

export const CommentSkeleton = () => (
  <Box>
    <Skeleton width={80} height={32} />
    <Skeleton width={150} height={24} />
  </Box>
);

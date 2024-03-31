import { Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CardContainer } from "../styles";

export const CardSkeletonContainer = styled(CardContainer)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const TitleSkeleton = styled(Skeleton)({
  width: 200,
  height: 36,
});

export const ViewMoreSkeleton = styled(Skeleton)({
  width: 70,
  height: 36,
});

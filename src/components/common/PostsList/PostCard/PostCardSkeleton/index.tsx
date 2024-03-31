import { CSSProperties } from "react";
import { CardWrapper } from "../styles";
import {
  CardSkeletonContainer,
  TitleSkeleton,
  ViewMoreSkeleton,
} from "./styles";

interface PostCardSkeletonProps {
  style: CSSProperties;
}
export const PostCardSkeleton = ({ style }: PostCardSkeletonProps) => (
  <CardWrapper sx={style}>
    <CardSkeletonContainer component="div">
      <TitleSkeleton />
      <ViewMoreSkeleton />
    </CardSkeletonContainer>
  </CardWrapper>
);

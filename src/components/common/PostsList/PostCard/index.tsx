import { useLocation, useVirtualGrid } from "@/hooks";
import { usePostsStore } from "@/stores";
import { BasicPostInfo } from "@/types";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import { Box, Checkbox, Rating } from "@mui/material";
import { memo } from "react";
import { GridChildComponentProps } from "react-window";
import { PostCardSkeleton } from "./PostCardSkeleton";
import { Tags } from "./Tags";
import { ViewMore } from "./ViewMore";
import {
  CardContainer,
  CardContentContainer,
  CardTitle,
  CardTitleContaienr,
  CardWrapper,
} from "./styles";

type PostCardProps = GridChildComponentProps<BasicPostInfo[]>;

export const PostCard = memo(
  ({ rowIndex, columnIndex, data, style }: PostCardProps) => {
    const { selectedPosts, totalPostsCount, setSelectedPosts } =
      usePostsStore();
    const { gridColumnCount } = useVirtualGrid();
    const postIndex = rowIndex * gridColumnCount + columnIndex;
    const post = data[postIndex];

    const { isFavoritePage } = useLocation();

    const totalPosts = isFavoritePage ? selectedPosts.size : totalPostsCount;

    if (postIndex >= totalPosts) {
      return null;
    }

    if (!post) {
      return <PostCardSkeleton style={style} />;
    }

    const onCheckClick = () => {
      if (!isFavoritePage) {
        setSelectedPosts(post.id);
      }
    };

    return (
      <CardWrapper sx={style}>
        <CardContainer component="div" active={selectedPosts.has(post.id)}>
          <CardTitleContaienr>
            <Checkbox
              size="small"
              onChange={onCheckClick}
              checked={selectedPosts.has(post.id)}
            />
            <CardTitle>{capitalizeFirstLetter(post.title)}</CardTitle>
          </CardTitleContaienr>
          {isFavoritePage && (
            <Box pl={1}>
              <Rating
                name="simple-controlled"
                value={selectedPosts.get(post.id)}
                readOnly
              />
            </Box>
          )}
          <CardContentContainer>
            <Tags tags={post.tags} />
            <ViewMore postId={post.id} userId={post.userId} />
          </CardContentContainer>
        </CardContainer>
      </CardWrapper>
    );
  },
);

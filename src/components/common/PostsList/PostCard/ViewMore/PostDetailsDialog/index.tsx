import { Loading } from "@/components/common";
import { QUERY_KEYS } from "@/constants";
import { useLocation } from "@/hooks";
import { postsApi, usersApi } from "@/services/api";
import { usePostsStore } from "@/stores";
import { BasicUserInfo, Post } from "@/types";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import { Box, Rating, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react/jsx-runtime";
import { PostComments } from "./PostComments";
import { Title } from "./Title";
import {
  CommentsTitle,
  CustomDialogContent,
  PostDetailsAlertError,
} from "./styles";

interface PostDetailsDialogProps {
  onClose: () => void;
  postId: number;
  userId: number;
}

export const PostDetailsDialog = ({
  onClose,
  postId,
  userId,
}: PostDetailsDialogProps) => {
  const { selectedPosts, changePostRating } = usePostsStore();
  const { isFavoritePage } = useLocation();

  const { data, isPending, isError } = useQuery<{
    post: Post;
    user: BasicUserInfo;
  }>({
    queryKey: [QUERY_KEYS.POST_AND_USER_INFO, postId, userId],
    queryFn: async ({ queryKey }) => {
      const [_, postId, userId] = queryKey as [string, number, number];
      const promises: [Promise<Post>, Promise<BasicUserInfo>] = [
        postsApi.getPostById(postId),
        usersApi.getBasicUserInfoById(userId),
      ];

      const [post, user] = await Promise.all(promises);
      return {
        post,
        user,
      };
    },
  });

  if (isPending) {
    return (
      <Box minHeight={400}>
        <Loading />
      </Box>
    );
  }

  if (isError) {
    return (
      <PostDetailsAlertError
        text="Failed to load user information"
        severity="error"
      />
    );
  }

  return (
    <Fragment>
      <Title onClose={onClose} basicUserInfo={data.user}>
        {capitalizeFirstLetter(data.post.title)}
      </Title>
      <CustomDialogContent>
        {isFavoritePage && (
          <Rating
            value={selectedPosts.get(data.post.id)}
            onChange={(_event, newValue) => {
              changePostRating(data.post.id, newValue ?? 0);
            }}
          />
        )}
        <Typography>{capitalizeFirstLetter(data.post.body)}</Typography>
        <Box>
          <CommentsTitle>Post comments</CommentsTitle>
          <PostComments postId={postId} />
        </Box>
      </CustomDialogContent>
    </Fragment>
  );
};

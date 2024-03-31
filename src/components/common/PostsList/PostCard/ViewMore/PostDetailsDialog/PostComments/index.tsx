import { FETCHING_COMMENTS_ERROR_MESSAGE, QUERY_KEYS } from "@/constants";
import { CommentsResponse, postsApi } from "@/services/api";
import { Typography } from "@mui/material";
import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { CommentSkeleton } from "./CommentSkeleton";
import { ShowMoreCommentsButton } from "./ShowMoreCommentsButton";
import { UserComment } from "./UserComment";
import { CommentsContainer, CommentsErrorAlert } from "./styles";

type CommentsQueryKey = [string, number];

interface PostCommentsProps {
  postId: number;
}

export const PostComments = ({ postId }: PostCommentsProps) => {
  const fetchComments: QueryFunction<
    CommentsResponse,
    CommentsQueryKey,
    number
  > = ({ queryKey, pageParam }) => {
    const [_endPoint, id] = queryKey;
    return postsApi.getCommentsByPostId({
      postId: id,
      page: pageParam,
    });
  };

  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.COMMENTS, postId],
    queryFn: fetchComments,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { skip, limit, total } = lastPage;
      const totalLoadedCommentsCount = skip + limit;

      return totalLoadedCommentsCount < total
        ? totalLoadedCommentsCount
        : undefined;
    },
  });

  const comments = useMemo(() => {
    return data?.pages.map(({ comments }) => comments).flat();
  }, [data?.pages]);

  if (isError) {
    return (
      <CommentsErrorAlert
        severity="error"
        text={FETCHING_COMMENTS_ERROR_MESSAGE}
      />
    );
  }

  if (comments && comments.length === 0) {
    return <Typography>No comments yet...</Typography>;
  }

  return (
    <CommentsContainer>
      {(comments ?? []).map((comment) => (
        <UserComment key={`comment-${comment.id}`} {...comment} />
      ))}
      {(isPending || isFetchingNextPage) && <CommentSkeleton />}
      {hasNextPage && (
        <ShowMoreCommentsButton
          disabled={isFetchingNextPage}
          fetchNextComments={fetchNextPage}
        />
      )}
    </CommentsContainer>
  );
};

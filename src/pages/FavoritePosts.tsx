import { Alert, Loading, PostsList } from "@/components/common";
import { FavoritePageHeader } from "@/components/favorite";
import {
  DEFAULT_POSTS_LIMIT,
  FETCHING_POSTS_ERROR_MESSAGE,
  QUERY_KEYS,
} from "@/constants";
import { postsApi } from "@/services/api";
import { usePostsStore } from "@/stores";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useMemo } from "react";

export const FavoritePosts = () => {
  const { selectedPosts } = usePostsStore();

  const { data, fetchNextPage, isPending, isError, isRefetching } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.FAVORITE_POSTS],
      queryFn: async ({ pageParam }) => {
        const arrayFromSet: number[] = [...selectedPosts.keys()];
        const postsInRange: number[] = arrayFromSet.slice(
          pageParam,
          pageParam + DEFAULT_POSTS_LIMIT,
        );

        const promises = postsInRange.map((postId) =>
          postsApi.getPostById(postId),
        );
        return await Promise.all(promises);
      },
      initialPageParam: 0,
      getNextPageParam: (_lastPage, pages) => {
        const totalLoadedPostsCount = pages.length * DEFAULT_POSTS_LIMIT;
        return totalLoadedPostsCount < selectedPosts.size
          ? totalLoadedPostsCount
          : undefined;
      },
    });

  const posts = useMemo(() => data?.pages.flat() ?? [], [data]);

  if (isPending || isRefetching) {
    return <Loading />;
  }

  if (isError) {
    return <Alert severity="error" text={FETCHING_POSTS_ERROR_MESSAGE} />;
  }

  const loadMorePosts = () => {
    fetchNextPage();
  };

  return (
    <Fragment>
      <FavoritePageHeader />
      <PostsList
        loadMorePosts={loadMorePosts}
        total={selectedPosts.size}
        posts={posts}
        rowsCountToDisplay={5}
      />
    </Fragment>
  );
};

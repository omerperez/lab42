import { Alert, Loading, PostsList } from "@/components/common";
import { PostsPageHeader, Search } from "@/components/posts";
import { FETCHING_POSTS_ERROR_MESSAGE, QUERY_KEYS } from "@/constants";
import { postsApi } from "@/services/api";
import { usePostsStore } from "@/stores";
import { Box } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useMemo, useState } from "react";

export const Posts = () => {
  const { totalPostsCount, setTotalPostsCount } = usePostsStore();
  const [search, setSearch] = useState<string>("");

  const { data, fetchNextPage, isPending, isError, refetch, isRefetching } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.POSTS],
      queryFn: async ({ pageParam }) => {
        const getPosts = search
          ? postsApi.searchPosts({
              skip: pageParam,
              search,
            })
          : postsApi.getPosts({
              skip: pageParam,
            });
        const pagePostsData = await getPosts;
        if (pagePostsData.total !== totalPostsCount) {
          setTotalPostsCount(pagePostsData.total);
        }
        return pagePostsData;
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        const { skip, limit, total } = lastPage;
        const totalLoadedPostsCount = skip + limit;
        return totalLoadedPostsCount < total!
          ? totalLoadedPostsCount
          : undefined;
      },
    });

  const posts = useMemo(
    () => data?.pages.map(({ posts }) => posts).flat() ?? [],
    [data],
  );

  useMemo(() => {
    refetch();
  }, [search]);

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
      <Box pl={1}>
        <PostsPageHeader />
        <Search onSearch={setSearch} />
      </Box>
      <PostsList
        loadMorePosts={loadMorePosts}
        total={totalPostsCount}
        posts={posts}
        rowsCountToDisplay={7}
      />
    </Fragment>
  );
};

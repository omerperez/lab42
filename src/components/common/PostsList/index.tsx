import { useVirtualGrid } from "@/hooks";
import { BasicPostInfo } from "@/types";
import { debounce } from "@/utils/debounce";
import { Typography } from "@mui/material";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { PostCard } from "./PostCard";

interface PostsListProps {
  posts: BasicPostInfo[];
  total: number;
  loadMorePosts: () => void;
  rowsCountToDisplay: number;
}

export const PostsList = ({
  posts,
  total,
  loadMorePosts,
  rowsCountToDisplay,
}: PostsListProps) => {
  const {
    virtualGridWidth,
    virtualGridHeight,
    gridColumnCount,
    transformGridItemsRenderedPropsToList,
  } = useVirtualGrid();

  if (posts.length === 0) {
    return (
      <Typography variant="h4" align="center" mt={5}>
        No Favorites Posts yet...
      </Typography>
    );
  }

  const isItemLoaded = (index: number) => index < posts.length;

  const rowCount = Math.ceil(posts.length / gridColumnCount);

  const debouncedLoadMorePosts = debounce(loadMorePosts, 500);

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      loadMoreItems={debouncedLoadMorePosts}
      itemCount={total}
    >
      {({ onItemsRendered, ref }) => (
        <Grid
          width={virtualGridWidth}
          height={virtualGridHeight}
          columnCount={gridColumnCount}
          rowCount={rowCount}
          columnWidth={virtualGridWidth / gridColumnCount}
          rowHeight={Math.max(virtualGridHeight / rowsCountToDisplay, 100)}
          itemData={posts}
          style={{
            marginTop: 10,
            overflowY: "scroll",
            overflowX: "hidden",
          }}
          onItemsRendered={(props) =>
            onItemsRendered(transformGridItemsRenderedPropsToList(props, total))
          }
          ref={ref}
        >
          {PostCard}
        </Grid>
      )}
    </InfiniteLoader>
  );
};

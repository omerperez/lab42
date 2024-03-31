import { usePostsStore } from "@/stores";
import { NotInterested } from "@mui/icons-material";
import { Button } from "@mui/material";

export const RemoveAllFavoriteButton = () => {
  const { selectedPosts, removeFavorite } = usePostsStore();

  return (
    <Button
      variant="contained"
      disabled={selectedPosts.size === 0}
      color={"error"}
      startIcon={<NotInterested />}
      onClick={removeFavorite}
    >
      Remove all
    </Button>
  );
};

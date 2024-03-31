import { usePostsStore } from "@/stores";
import {
  SelectedPostsTextSkeleton,
  SelectedPostsTextWrapper,
  SelectedText,
} from "./styles";

export const SelectedPostsText = () => {
  const { selectedPosts, totalPostsCount } = usePostsStore();

  if (!totalPostsCount) {
    return <SelectedPostsTextSkeleton variant="rounded" />;
  }

  return (
    <SelectedPostsTextWrapper>
      <SelectedText>
        {`${selectedPosts.size} of ${totalPostsCount} posts selected`}
      </SelectedText>
    </SelectedPostsTextWrapper>
  );
};

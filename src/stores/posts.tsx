import { create } from "zustand";

interface PostsStore {
  totalPostsCount: number;
  setTotalPostsCount: (totalPosts: number) => void;
  removeFavorite: () => void;
  selectedPosts: Map<number, number>;
  setSelectedPosts: (postId: number) => void;
  changePostRating: (postId: number, rating: number) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  totalPostsCount: 0,
  setTotalPostsCount: (totalPosts) => set({ totalPostsCount: totalPosts }),
  removeFavorite: () =>
    set({
      selectedPosts: new Map<number, number>(),
    }),
  selectedPosts: new Map<number, number>(),
  changePostRating: (postId, rating) => {
    set(({ selectedPosts }) => {
      if (selectedPosts.has(postId)) {
        const updateSelectedPosts = new Map(selectedPosts);
        return {
          selectedPosts: updateSelectedPosts.set(postId, rating),
        };
      }
      return { selectedPosts };
    });
  },
  setSelectedPosts: (postId) => {
    set(({ selectedPosts }) => {
      const updateSelectedPosts = new Map(selectedPosts);
      if (updateSelectedPosts.has(postId)) {
        updateSelectedPosts.delete(postId);
      } else {
        updateSelectedPosts.set(postId, 0);
      }
      return { selectedPosts: updateSelectedPosts };
    });
  },
}));

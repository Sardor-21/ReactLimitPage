import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  console.log();
  const SortedPost = useMemo(() => {
    console.log("render");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return SortedPost;
};

export const usePosts = (posts, sort, search) => {
  const SortedPost = useSortedPosts(posts, sort);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortedAndSearchPosts = useMemo(() => {
    return SortedPost.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
  });
  return sortedAndSearchPosts;
};

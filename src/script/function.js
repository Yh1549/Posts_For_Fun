/**
 * Filter blog posts by published date and order them.
 * @param posts Collection of blog posts
 * @returns Collection of blog posts sorted by date
 */
export const sortPostByDate = (posts) => {
  if (!posts) {
    return [];
  }
  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
};

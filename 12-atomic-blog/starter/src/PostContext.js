/* import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";

//1. create a context
const PostContext = createContext();

function PostProvider() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost()),
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery?.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return <div></div>;
}

export default PostProvider;
 */

/* import { useContext } from "react";
import { PostContent } from "./App";
const usePosts = function () {
  const context = useContext(PostContent);
  return context;
};
export { usePosts };
 */

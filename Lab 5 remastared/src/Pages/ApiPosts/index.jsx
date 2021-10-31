import { useEffect, useState } from "react";
import { useGet } from "../../hooks/useGet";

export const ApiPosts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = useGet();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  if (!posts.length) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};

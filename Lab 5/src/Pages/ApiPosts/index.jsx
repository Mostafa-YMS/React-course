import { useApiContext } from '../../hooks/useApiContext';
import { useEffect, useState } from "react";

export const ApiPosts = ()=> {
    const[posts, setPosts] = useState([])
    const getPosts = useApiContext()

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

    if (!posts.length) return <h1>Loading...</h1>;
    return(<>
    <h1>Api Posts</h1>
    {posts.map((post)=> (
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>))}
    </>)
}
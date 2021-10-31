import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

export const usePost = () => {
  const apiContext = useContext(ApiContext);

  return async (post) => {
    return await apiContext.post("/posts", post);
    
  };
};

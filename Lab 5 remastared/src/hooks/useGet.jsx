import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

export const useGet = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/posts");
    return data;
  };
};

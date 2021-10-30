import { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';

export const useApiContextPost = ()=> {
    const apiContext = useContext(ApiContext)

    return (body)=> apiContext.post("/posts", body);
}
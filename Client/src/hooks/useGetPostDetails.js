
import { useEffect, useState } from 'react'
import { getAccessTocken } from '../utils/common-utils';
import { GET_POST_DETAILS } from '../utils/constant';

const useGetPostDetails = (id, trigger, setIsLoading) => {
    const [post, setPost] = useState('');
    useEffect(() => {
        getPostDetails();
    }, [trigger]);

    const getPostDetails = async () => {
        const GET_POST_URL = `${GET_POST_DETAILS}${id}`
        !trigger && setIsLoading(true);
        const response = await fetch(GET_POST_URL, {
        headers: {
            authorization: getAccessTocken(),
            'Content-type': 'application/json; charset=UTF-8',
        }
        });
        setIsLoading(false);
        const json = await response.json();
        setPost(json);
    }
    
    return post;
}

export default useGetPostDetails;
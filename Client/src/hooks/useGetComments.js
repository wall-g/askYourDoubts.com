
import { useEffect, useState } from 'react'
import { getAccessTocken } from '../utils/common-utils';
import { GET_COMMENTS } from '../utils/constant';

const useGetComments = (id, trigger, setIsLoading) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments();
    }, [trigger]);

    const getComments = async () => {
        const GET_COMMENTS_URL = `${GET_COMMENTS}${id}`
        !trigger && setIsLoading(true);
        const response = await fetch(GET_COMMENTS_URL, {
            headers: {
                authorization: getAccessTocken(),
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const json = await response.json();
        setIsLoading(false);
        setComments(json);
    }

    return comments;
}

export default useGetComments;



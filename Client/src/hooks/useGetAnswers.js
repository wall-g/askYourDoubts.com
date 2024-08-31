
import { useEffect, useState } from 'react'
import { getAccessTocken } from '../utils/common-utils';
import { GET_ANSWERS } from '../utils/constant';

const useGetAnswers = (id, trigger, setIsLoading) => {
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        getAnswers();
    }, [trigger]);

    const getAnswers = async () => {
        const GET_ANSWERS_URL = `${GET_ANSWERS}${id}`
        !trigger && setIsLoading(true);
        const response = await fetch(GET_ANSWERS_URL, {
          headers: {
            authorization: getAccessTocken(),
            'Content-type': 'application/json; charset=UTF-8',
          }
        });
        const json = await response.json();
        setIsLoading(false);
        setAnswers(json);
      }
    return answers;
}

export default useGetAnswers;



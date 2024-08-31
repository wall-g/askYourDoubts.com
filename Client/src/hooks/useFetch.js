import { useEffect, useState } from "react";
import useSessionStorage from "./useSessionStorage";

const useFetch = (url, trigger, setIsLoading) => {
    const [data, setData] = useState([]);
    const accessTokenStorage = useSessionStorage('accessToken');

    useEffect(() => {
        getData();
    }, [url, trigger])

    async function getData() {
        try {
            setIsLoading(true);
            const response = await fetch(url, {
                headers: {
                    authorization: accessTokenStorage.getValue(),
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const json = response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return  new Promise((resolve, reject) => {
        resolve(data);
    })
}

export default useFetch;
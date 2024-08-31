import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Loading from './Loader';
import { useState } from 'react';
import { FETCH_POSTS_URL } from '../utils/constant';
import { getAccessTocken } from '../utils/common-utils';
import { useEffect } from 'react';

function Body() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            setIsLoading(true);
            const response = await fetch(FETCH_POSTS_URL, {
                headers: {
                    authorization: getAccessTocken(),
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            setIsLoading(false);
            const json = await response.json();
            setPosts(json);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        isLoading ? <Loading /> :
            <div className='font-body text-gry max-w-7xl mx-auto grid grid-cols-7 mt-10 p-2 md:p-3'>
                <Sidebar />
                <Main setIsLoading={setIsLoading} posts={posts}/>
            </div>

    )
}

export default Body
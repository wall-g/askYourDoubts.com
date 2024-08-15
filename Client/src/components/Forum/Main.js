import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Post from '../Post/Post';
import { FETCH_POSTS_URL } from '../../utils/constant';

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch(FETCH_POSTS_URL);
    const json = await response.json();
    setPosts(json);
  }
  
  return (
    <div className='col-span-6 ml-6 font-body md:col-span-7 md:ml-0 md:relative md:z-0'>
        <div className='flex justify-between'>
            <h1 className='l:text-xl text-2xl text-txt md:text-l'>All Questions</h1>
            <Link to="/add-question" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded l:text-sm  sm:px-2 sm:text-xs">
              Ask Question
            </Link>
        </div>

        <div className='flex mt-4  pb-3 justify-between'>
          <p className='sm:text-sm'>All question stat</p>
          <div>
            <button className="l:py-1 bg-white text-gry py-2 px-1 text-xs border-2 border-slate-300 rounded-l-0 rounded-l">
                Newest
            </button>
            <button className="l:py-1 bg-white  text-gry py-2 px-1 text-xs border-2 border-slate-300 border-l-0">
                Active
            </button>
            <button className="l:py-1 bg-white  text-gry py-2 px-1 text-xs border-2 border-slate-300 border-l-0 rounded-r">
                More
            </button>
            <button className="l:py-1 bg-blue-200 text-blue-800 border-2 border-blue-800 py-2 px-3 rounded text-xs ml-3 sm:px-1"><i className="fa fa-filter"></i> Filter</button>
          </div>
      </div>
      {posts.map((post) => <Post key={post._id} post={post}/>)}
    </div>
  )
}

export default Main
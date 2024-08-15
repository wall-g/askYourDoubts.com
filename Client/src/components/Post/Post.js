import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
    console.log(post);
    return (
        <div className='flex mt-4 border-t-2 border-slate-300 pt-2 md:block'>
            <div className='text-xs w-20 l:w-24 md:flex md:w-44 md:gap-4'>
                <p className='mt-1'>0 votes</p>
                <p className='mt-1'>0 answers</p>
                <p className='mt-1'>0 views</p>
            </div>

            <div className='ml-3 md:ml-0 w-full'>
                <Link to="/question">
                    <h3 className='l:text-sm text-blue-500 font-medium'>{post.title}</h3>
                </Link>
                <div className='flex mt-2 justify-between md:block'>
                    <div>
                        {post.tags.map((tag, idx) => <button key={idx} className="l:px-1  bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs mr-2">{tag}</button>)}
                    </div>
                    <div className='justify-self-end text-xs text-blue-800 md:mt-2'>
                        <p><i className="fa fa-user text-sm"></i> {post.userName} <span className='text-gry'> {new Date(post.createdDate).toLocaleDateString()} </span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post
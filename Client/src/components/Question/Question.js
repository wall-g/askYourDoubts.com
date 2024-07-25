import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
function Question() {
  const [ShowComments, setShowComments] = useState(false);
  const editorRef = useRef(null);
  return (
    <div className='col-span-6 ml-6 font-body md:col-span-7 md:ml-0 md:relative md:z-0'>
        <div className='flex justify-between'>
            <h1 className='l:text-xl text-2xl text-txt md:text-sm'>How to use drag and drop in ant design?</h1>
            <Link to="/add-question" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded l:text-sm sm:px-2 sm:text-xs md:px-2">
              Ask Question
            </Link>
        </div>

        <div className='flex gap-8 sm:gap-2'>
          <p className='text-xs text-gry'>Asked<span className='text-txt'> today</span></p>
          <p className='text-xs text-gry'>Modified<span className='text-txt'> today</span></p>
          <p className='text-xs text-gry'>Viewed<span className='text-txt'> 23 times</span></p>
        </div>

        <div className='flex mt-4 border-t-2 border-slate-300 pt-2 gap-2'>
          <div className='justify-self-end text-sm text-center'>
            <p className='mt-1'>▲</p>
            <p className='mt-1'>0</p>
            <p className='mt-1'>▼</p>
            <i className="fa fa-bookmark text-sm mt-1"></i>
          </div>

          <div className='ml-3'>
            <p className='l:text-xs mt-2 text-txt text-sm tracking-wide'>Am writing code to split seconds into years, days, minutes, seconds. 
            I'm getting some unexpected results: eg 3600 seconds comes out as 1 hour. But 3599 seconds comes out as 60 minutes and 59 seconds.
            Firstly, there should never be 60 minutes. This should be 1 hour. But that aside the actual result is wrong.
            Is there some error in my calculation logic, or is there a funky rounding error going on using modulo and Math.floor? Thanks!</p>

            <div className='grid grid-cols-2 mt-2'>
              <div>
                <button class="l:px-1 bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs">CSS</button>
                <button class="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">HTML</button>
                <button class="l:px-1 l:ml-2 bg-blue-200  text-blue-800 px-3 py-1 rounded text-xs ml-5">Javascript</button>
              </div>
              <div className='justify-self-end text-xs text-blue-800 bg-blue-100 px-2 py-2 rounded'>
                <p><i className="fa fa-user"></i> username <span className='text-gry'> timespan</span></p>
              </div>
            </div>

            <div>
              <p className='text-gry text-sm hover:text-blue-500 cursor-pointer mt-6 mb-4' onClick={() => setShowComments(!ShowComments)}>Add a comment</p>
              {
                ShowComments && (
                  <div className='bg-secondary py-2 px-2 border-slate-300 border-2'>
                     <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-2 text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence" placeholder="Add a comment..."></input>
                     <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-1  text-xs mt-3">Add a comment</button>
                      <div className='flex gap-4 mt-3 border-t-2 border-slate-300 pt-2'>
                        <i className="fa fa-user text-2xl border-2 rounded-full px-2 py-1 bg-white"></i>
                        <div>
                          <p className='text-sm text-txt l:text-xs'>username</p>
                          <p className='text-xs'>Nov 11, 2021</p>
                        </div>
                      </div>
                      <p className='mt-1 text-sm l:text-xs'>Really Good Explanation!!!</p>

                      <div className='flex gap-4 mt-3 border-t-2 border-slate-300 pt-2'>
                        <i className="fa fa-user text-2xl border-2 rounded-full px-2 py-1 bg-white"></i>
                        <div>
                          <p className='text-sm text-txt l:text-xs'>username</p>
                          <p className='text-xs'>Nov 11, 2021</p>
                        </div>
                      </div>
                      <p className='mt-1 text-sm l:text-xs'>Really Good Explanation!!!</p>
                  </div>
                )
              }
            </div>
            <div>
              <h3 className='text-txt text-sm mt-3'>2 Answers</h3>
            </div>

          </div>
        </div>

        <div className='flex pt-2 gap-2 border-t-2 border-slate-300 mt-2'>
          <div className='justify-self-end text-sm text-center'>
            <p className='mt-1'>▲</p>
            <p className='mt-1'>0</p>
            <p className='mt-1'>▼</p>
          </div>

          <div className='ml-3'>
            <p className='l:text-xs mt-2 text-txt text-sm tracking-wide'>Am writing code to split seconds into years, days, minutes, seconds. 
            I'm getting some unexpected results: eg 3600 seconds comes out as 1 hour. But 3599 seconds comes out as 60 minutes and 59 seconds.
            Firstly, there should never be 60 minutes. This should be 1 hour. But that aside the actual result is wrong.
            Is there some error in my calculation logic, or is there a funky rounding error going on using modulo and Math.floor? Thanks!
            My snippet to follow DOES NOT validate an email address; it is assumed that your project will use appropriate methods to validate 
            the address before bothering to allow it into your system. The power/utility of this snippet is that it is multibyte-safe and it will add asterisks in all scenarios and when there is only a single character in the local part, the leading character is 
            repeated before the @ so that the mutated address is harder to guess.
            </p>

            <div className='grid mt-2'>
              <div className='justify-self-end text-xs text-blue-800 bg-blue-100 px-2 py-2 rounded'>
                <p><i className="fa fa-user"></i> username <span className='text-gry'> timespan</span></p>
              </div>
            </div>

          </div>
        </div>

        <div className='flex pt-2 gap-2 border-t-2 border-slate-300 mt-2'>
          <div className='justify-self-end text-sm text-center'>
            <p className='mt-1'>▲</p>
            <p className='mt-1'>0</p>
            <p className='mt-1'>▼</p>
          </div>

          <div className='ml-3'>
            <p className='l:text-xs mt-2 text-txt text-sm tracking-wide'>Am writing code to split seconds into years, days, minutes, seconds. 
            I'm getting some unexpected results: eg 3600 seconds comes out as 1 hour. But 3599 seconds comes out as 60 minutes and 59 seconds.
            Firstly, there should never be 60 minutes. This should be 1 hour. But that aside the actual result is wrong.
            Is there some error in my calculation logic, or is there a funky rounding error going on using modulo and Math.floor? Thanks!
            My snippet to follow DOES NOT validate an email address; it is assumed that your project will use appropriate methods to validate 
            the address before bothering to allow it into your system. The power/utility of this snippet is that it is multibyte-safe and it will add asterisks in all scenarios and when there is only a single character in the local part, the leading character is 
            repeated before the @ so that the mutated address is harder to guess.
            </p>

            <div className='grid mt-2'>
              <div className='justify-self-end text-blue-800 bg-blue-100 px-2 py-2 rounded text-xs'>
                <p><i className="fa fa-user"></i> username <span className='text-gry'> timespan</span></p>
              </div>
            </div>

          </div>
        </div>
        <div className='border-t-2 border-slate-300 mt-3'>
          <h1 className='my-3'>Your Answer</h1>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              height: 300,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
                'image','link','codesample'
              ],
              toolbar: 'undo redo | formatselect | ' +
              'bold italic | alignleft aligncenter ' +
              'alignright alignjustify' +
              'removeformat | image link | codesample',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded mt-4 mb-6 text-sm">
            Post your answer
          </button>
        </div>

    </div>
  )
}

export default Question
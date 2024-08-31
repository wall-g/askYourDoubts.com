import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import ReactHtmlParser from 'html-react-parser'
import { ADD_COMMENT_URL } from '../utils/constant';
import { ADD_ANSWER_URL } from '../utils/constant';
import { getAccessTocken } from '../utils/common-utils';
import Answer from './Answer';
import Comment from './Comment';
import { getUserName } from '../utils/common-utils';
import { useParams } from 'react-router-dom';

const commentInitialValues = {
  userName: '',
  comment: '',
  postId: '',
  date: new Date()
}

const answerInitialValues = {
  userName: '',
  answer: '',
  postId: '',
  date: new Date()
}

function Question({answers, comments, post, setTrigger}) {
  const [comment, setComment] = useState(commentInitialValues);
  const [answer, setAnswer] = useState(answerInitialValues);
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const userName = getUserName();
  const { id } = useParams();

  const handleCommentInput = (e) => {
    setComment({ ...comment, userName: userName, comment: e.target.value, postId: id })
  }

  const handleAnswer = (e) => {
    setAnswer({ ...answer, userName: userName, answer: e, postId: id })
  }

  const addComment = async () => {
    try {
      await fetch(ADD_COMMENT_URL, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          authorization: getAccessTocken(),
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      setComment(commentInitialValues);
      setTrigger(true);
    } catch (error) {
      console.log(error);
    }
  }

  const addAnswer = async () => {
    try {
      await fetch(ADD_ANSWER_URL, {
        method: "POST",
        body: JSON.stringify(answer),
        headers: {
          authorization: getAccessTocken(),
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      setAnswer(answerInitialValues);
      editorRef?.current?.setContent('');
      setTrigger(true);
    } catch (error) {
      console.log(error);
    }
  }

  return post ? (
    <div className='col-span-6 ml-6 font-body md:col-span-7 md:ml-0 md:relative md:z-0'>
      <div className='flex justify-between'>
        <h1 className='l:text-xl text-2xl text-txt md:text-sm'>{post.title}</h1>
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

        <div className='ml-3 w-full'>
          <div className='l:text-xs mt-2 text-txt text-sm tracking-wide'>
            {ReactHtmlParser(post.body)}
          </div>
          <div className='min-md:grid min-md:grid-cols-2 mt-2'>
            <div>
              {post.tags.map((tag, idx) => <button key={idx} className="l:px-1  bg-blue-200 text-blue-800  px-3 py-1 rounded text-xs mr-2">{tag}</button>)}
            </div>
            <div className='justify-self-end text-xs flex md:mt-8'>
              <p className='text-blue-800 bg-blue-100 rounded px-2 py-2'><i className="fa fa-user"></i> {post.userName} </p>
              <span className='text-gry px-2 py-2'> {new Date(post.createdDate).toDateString()} </span>
            </div>
          </div>

          <div>
            <div className='bg-secondary py-2 px-2 border-slate-300 border-2 mt-8 mb-8'>
              <input value={comment.comment}
                onChange={(e) => handleCommentInput(e)}
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-2 text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="sentence"
                placeholder="Add a comment..."
                ref={inputRef}>
              </input>
              <button
                onClick={() => addComment()}
                className={`bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 text-xs mt-3 ${!inputRef?.current?.value ? 'bg-gray-400' : ''}`}
                disabled={!inputRef?.current?.value}>Add a comment
              </button>
              {comments && comments.map((comment) => <Comment key={comment._id} comment={comment} />)}
            </div>
          </div>
          <div>
            <h3 className='text-txt text-sm mt-3'>{answers.length} Answers</h3>
          </div>

        </div>
      </div>
      {answers && answers.map((answer) => <Answer key={answer._id} answer={answer} />)}
      <div className='border-t-2 border-slate-300 mt-3'>
        <h1 className='my-3'>Your Answer</h1>
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              'image', 'link', 'codesample'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic | alignleft aligncenter ' +
              'alignright alignjustify' +
              'removeformat | image link | codesample',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          onEditorChange={(e) => handleAnswer(e)}
        />
        <button onClick={() => addAnswer()} className={`bg-blue-500 text-white py-2 px-2 rounded mt-4 mb-6 text-sm ${!editorRef?.current?.getContent() ? 'bg-gray-400' : 'hover:bg-blue-700'}`} disabled={!editorRef?.current?.getContent()}>
          Post your answer
        </button>
      </div>

    </div>
  ) : null
}

export default Question
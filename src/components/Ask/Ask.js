import React from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {TagsInput} from 'react-tag-input-component'
import ques from '../../resources/ques.svg'
import '../Ask/editor.css'
function Ask() {
  return (
    <div className='max-w-4xl mx-auto mt-10 font-body'>
        <h2 className='text-txt text-2xl'>Ask a public question</h2>
        <img src={ques} alt='ques' className='h-44'/> 
        <div className='bg-white px-4 py-4 shadow-md rounded'>
            <h3 className='text-sm font-semibold'>Title</h3>
            <p className='text-xs text-gry mt-1 mb-1'>Be specific and imagine you're asking a question to another person</p>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence" placeholder="e.g. Is there an R function for finding the index of an element in a vector?"></input>
            <h3 className='text-sm font-semibold mt-4'>Body</h3>
            <p className='text-xs text-gry mt-1 mb-1'>Include all the information someone would need to answer your question</p>
            <CKEditor editor={ClassicEditor}/>
            <h3 className='text-sm font-semibold mt-4'>Tags</h3>
            <p className='text-xs text-gry mt-1 mb-1'>Add up to 5 tags to describe what your question is about</p>
            <TagsInput name='tags' placeHolder='e.g. (asp.net ruby-on-rails vb)'/>
        </div>  
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded mt-4 mb-6 text-sm">
          Add your question
        </button>
    </div>
  )
}

export default Ask
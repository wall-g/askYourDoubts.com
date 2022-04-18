import React, {useRef} from 'react'
import {TagsInput} from 'react-tag-input-component'
import { Editor } from '@tinymce/tinymce-react';
import ques from '../../resources/ques.svg'
function Ask() {
  const editorRef = useRef(null);
  return (
    <div className='max-w-4xl mx-auto mt-10 font-body p-2'>
        <h2 className='text-txt text-2xl'>Ask a public question</h2>
        <img src={ques} alt='ques' className='h-44'/> 
        <div className='bg-white px-4 py-4 shadow-md rounded'>
            <h3 className='text-sm font-semibold'>Title</h3>
            <p className='text-xs text-gry mt-1 mb-1'>Be specific and imagine you're asking a question to another person</p>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-2 text-sm mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="sentence" placeholder="e.g. Is there an R function for finding the index of an element in a vector?"></input>
            <h3 className='text-sm font-semibold mt-4'>Body</h3>
            <p className='text-xs text-gry mt-1 mb-1'>Include all the information someone would need to answer your question</p>
            <Editor
            apiKey='ewyywh62rqgkqrt4x7t0h4qg2cwru4o4yz3g63xiw8zk9cux'
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
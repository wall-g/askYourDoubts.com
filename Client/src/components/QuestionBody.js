import React from 'react'
import Question from './Question'
import Sidebar from './Sidebar'
import { useState } from 'react';
import useGetComments from '../hooks/useGetComments';
import useGetAnswers from '../hooks/useGetAnswers';
import useGetPostDetails from '../hooks/useGetPostDetails';
import { useParams } from 'react-router-dom';
import Loading from './Loader';

function QuestionBody() {
  const { id } = useParams();
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const comments = useGetComments(id, trigger, setIsLoading);
  const answers = useGetAnswers(id, trigger, setIsLoading);
  const post = useGetPostDetails(id, trigger, setIsLoading);

  return (
    isLoading? <Loading/>:
    <div className='font-body text-gry max-w-7xl mx-auto grid grid-cols-7 mt-10 p-2 md:p-3'>
        <Sidebar/>
        <Question comments={comments} answers={answers} post={post} setTrigger={setTrigger} trigger={trigger}/>
    </div>
  )
}

export default QuestionBody
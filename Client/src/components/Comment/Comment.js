
const Comment = ({comment}) => {
    return (
        <>
            <div className='flex gap-4 mt-3 border-t-2 border-slate-300 pt-2'>
                <i className="fa fa-user text-2xl border-2 rounded-full px-2 py-1 bg-white"></i>
                <div>
                    <p className='text-sm text-txt l:text-xs'>{comment.userName}</p>
                    <p className='text-xs'>{new Date(comment.date).toDateString()}</p>
                </div>
            </div>
            <p className='mt-1 text-sm l:text-xs'>{comment.comment}</p>
        </>

    )

}

export default Comment;
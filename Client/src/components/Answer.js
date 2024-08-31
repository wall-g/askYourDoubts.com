import ReactHtmlParser from 'html-react-parser'
const Answer = ({answer}) => {
    return (
        <div className='flex pt-2 gap-2 border-t-2 border-slate-300 mt-2'>
            <div className='justify-self-end text-sm text-center'>
                <p className='mt-1'>▲</p>
                <p className='mt-1'>0</p>
                <p className='mt-1'>▼</p>
            </div>

            <div className='ml-3 w-full'>
                <div className='l:text-xs mt-2 text-txt text-sm tracking-wide'>
                    {ReactHtmlParser(answer.answer)}
                </div>
                <div className='text-xs text-blue-800 mt-8 text-right'>
                    <i className="fa fa-user text-sm"></i> {answer.userName} <span className='text-gry'> {new Date(answer.date).toLocaleDateString()} </span>
                </div>
            </div>
        </div>
    )
}

export default Answer
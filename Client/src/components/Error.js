import React from 'react'
import { useRouteError } from "react-router-dom";


function Error() {
    const error = useRouteError();
    return (
        <div className='w-6/12 m-auto text-center mt-20'>
            <h1>Opps!!!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error
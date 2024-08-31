import React from 'react'
import { useEffect } from 'react'
import { getAccessTocken } from '../utils/common-utils'
import { useNavigate } from 'react-router-dom'

function Protected({ Component }) {
    const navigate = useNavigate();

    useEffect(() => {
        const isLogin = getAccessTocken();
        if(!isLogin){
            navigate('/auth');
        }
    }, [])
    return <Component/>
}

export default Protected
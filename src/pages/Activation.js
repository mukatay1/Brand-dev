import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { sign_up_activation } from '../redux/actions'

export default function Activation() {
    const [messageSend, setMessageSend] = useState(false)
    const dispatch = useDispatch()
    const { uid, token } = useParams()

    useEffect(() => {
        dispatch(sign_up_activation(uid, token))
        setMessageSend(true)
    }, [dispatch, uid, token])

    if (messageSend) {
        return <Navigate to='/' />
    }

    return (
        <Box>
            Activation page
        </Box>
    )
}

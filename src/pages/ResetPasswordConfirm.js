import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import { reset_password_confirm } from '../redux/actions'

export default function ResetPasswordConfirm() {
    const [isSend, setIsSend] = useState()
    const [formData, setFormData] = useState({
        new_password: '',
    })
    const dispatch = useDispatch()
    const { uid, token } = useParams()
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(reset_password_confirm(uid, token, formData.new_password))
        setIsSend(true)
    }
    if (isSend) {
        return <Navigate to={'/'} />
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" sx={{ mt: 5 }}>
                Reset password confirmation page
            </Typography>

            <form onSubmit={onSubmit} method="post">
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    name="password"
                    value={formData.new_password}
                    onChange={(e) => setFormData({ ...formData, new_password: e.target.value })}
                    sx={{
                        mt: 5
                    }}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                    Submit
                </Button>
            </form>
        </Container>
    )
}

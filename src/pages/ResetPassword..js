import { Button, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset_password } from '../redux/actions'

export default function ResetPassword() {
    const dispatch = useDispatch()
    const error = useSelector(state => state.login.reset_error)
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(reset_password(email))
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" sx={{ mt: 5 }}>
                Reset password  page
            </Typography>
            {error ? <Typography color="error"> {error}</Typography> : ''}

            <form onSubmit={onSubmit} method="post" >
                <TextField
                    fullWidth
                    margin="email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        mt: 5
                    }}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }} >
                    Submit
                </Button>
            </form>
        </Container>
    )
}

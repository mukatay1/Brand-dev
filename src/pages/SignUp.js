import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sign_up } from '../redux/actions'
import { Link } from 'react-router-dom'
import {
    Box,
    Button,
    Container,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import img_3 from '../images/img_3.jpeg'

export default function SignUp() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'password': '',
        're_password': ''
    })
    const SignUpChange = (e) => {
        return setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(
            sign_up(
                formData.name,
                formData.email,
                formData.password,
                formData.re_password
            ))
    }
    return (
        <Container maxWidth="lg">
            <Stack flexDirection="row" alignItems={'center'} sx={{
                mt: 8,
                p: 4,
                border: '1px solid lightgrey',
                boxShadow: '3'

            }}>
                <Box flex={1} sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block'
                    },
                }}>
                    <img src={img_3} alt='img' height='450' width='450' />
                </Box>
                <Box flex={1} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',

                }}>

                    <form onSubmit={(e) => onSubmit(e)} method="post">
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => SignUpChange(e)}

                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => SignUpChange(e)}

                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            name="password"
                            type="password"
                            minLength={5}
                            value={formData.password}
                            onChange={(e) => SignUpChange(e)}

                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            name="re_password"
                            type="password"
                            minLength={5}
                            value={formData.re_password}
                            onChange={(e) => SignUpChange(e)}

                        />
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Sign Up
                        </Button>
                    </form>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ mt: 3 }}>
                        <Typography variant="body1">
                            <Link to="/login">Login</Link>
                        </Typography>
                        <Typography variant="body1" >
                            <Link to="/reset">Forgot Password</Link>
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Container>

    )
}

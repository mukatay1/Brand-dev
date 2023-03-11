import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../redux/actions';
import {
    Box,
    Button,
    Container,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import img_3 from '../images/img_3.jpeg'

export default function Login() {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const error = useSelector(state => state.login.login_error);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const LoginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData.email, formData.password));
    };
    const LoginChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    if (isAuthenticated) {
        return <Navigate to="/" />;
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
                    
                    {error ? <Typography color="error">{error}</Typography> : ''}
                    <form onSubmit={(e) => LoginSubmit(e)} method="post">
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => LoginChange(e)}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            name="password"
                            type="password"
                            minLength={5}
                            value={formData.password}
                            onChange={(e) => LoginChange(e)}
                        />
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Login
                        </Button>
                    </form>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ mt: 3 }}>
                        <Typography variant="body1">
                            <Link to="/sign_up">Register Now</Link>
                        </Typography>
                        <Typography variant="body1" >
                            <Link to="/reset">Forgot Password</Link>
                        </Typography>
                    </Stack>

                </Box>
            </Stack>
        </Container>

    );
}

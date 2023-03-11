import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions'
import my_logo from '../images/my_logo.png'
import { AppBar, Autocomplete, Button, ButtonGroup, TextField, Toolbar, Typography } from '@mui/material';
import { blue } from '@mui/material/colors'
import { Stack } from '@mui/system'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
    const arr = ['ilyas', 'maulen']
    const user = useSelector(state => state.login.user)
    console.log(user)
    const dispatch = useDispatch()
    return (
        <AppBar position="static" sx={{ bgcolor: '#FFFFFF', boxShadow: 'none', width: '100%' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to='/'><img src={my_logo} alt='Brand' /></Link>
                <ButtonGroup variant="contained" sx={{ height: 43, boxShadow: 'none', border: 0 }}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={arr}
                        sx={{
                            width: {
                                xs: 150,
                                sm: 190,
                                md: 450
                            },
                            border: 2,
                            boxShadow: 'none',
                            borderRadius: 2,
                            borderTopRightRadius: 1,
                            borderBottomRightRadius: 1,
                            borderColor: blue[800],
                            display: 'flex',
                            alignItems: 'center',
                            pb: 1,
                            pl: 1   

                        }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                label="Search"
                                variant='standard'
                                border='none'
                                

                            />}
                    />
                    <Button sx={{
                        bgcolor: blue[850],
                        borderTopLeftRadius: 2,
                        borderBottomLeftRadius: 2,
                        width: {
                            xs: 20,
                            sm: 30,
                            md: 50
                        },
                        color: '#FFFFFF'
                    }}><SearchIcon sx={{ color: 'white' }} /></Button>
                </ButtonGroup>
                <Stack display="flex" flexDirection='row' alignItems="center">
                    <Button><Typography>Orders</Typography></Button>
                    {user
                        ?
                        <Link to='/cart'><Button><ShoppingCartIcon color='info' /></Button></Link>
                        :
                        ''
                    }
                    {user
                        ?
                        <Button onClick={dispatch(() => dispatch(logout()))}><Typography>Logout</Typography></Button>
                        :
                        <Link to='/login'><Button><Typography>Login</Typography></Button></Link>
                    }
                </Stack>
            </Toolbar>
        </AppBar>

    )
}


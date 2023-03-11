import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { get_user } from '../redux/actions'
import { get_cart } from '../redux/cart_actions'
import { Container } from '@mui/system'
import { Box } from '@mui/material'

export default function Layout(props) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.login.user)

    useEffect(() => {
        dispatch(get_user())
        if (user) {
            dispatch(get_cart(user.id))
        }
    }, [dispatch, user])

    return (
        <Box>
            <Container >
                <Navbar />
                {props.children}
            </Container>
            <Footer />
        </Box>
    )
}

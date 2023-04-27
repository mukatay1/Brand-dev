import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_item } from '../redux/item_actions'
import { Link } from 'react-router-dom'
import { add_item_to_cart } from '../redux/cart_actions'
import { Typography } from '@mui/material'
import MainBlock from '../component/MainBlock'

export default function Main() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.login.user)
    const items = useSelector(state => state.item.items)
    const cart = useSelector(state => state.cart.cart?.id)

    useEffect(() => {
        dispatch(get_item())
    }, [dispatch])

    const add_item = (product_id) => {
        if (user) {
            dispatch(add_item_to_cart(product_id, cart))
        }
    }

    return (
        <div>
            <MainBlock />
            <MainBlock />
            <Typography variant="h5" sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 6
            }}>Recommended Items</Typography>
            <div className='main_page'>
                <div className='container'>
                    {items.map((item) => {
                        return (
                            <div className="product-card" key={item.id}>
                                <button class="cart-button" onClick={() => add_item(item.id)}>Add to Cart</button>
                                <Link
                                    to={`/item/${item.id}`}
                                    state={item}
                                >
                                    <img src={'https://res.cloudinary.com/renfoodapi/' + item.image} alt="ex" />
                                    <h3>${item.price}</h3>
                                    <p> {item.description}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

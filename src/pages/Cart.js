import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_item_from_cart, add_item_to_cart } from '../redux/cart_actions'

export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const user = useSelector(state => state.login.user)

    const total = cart
        ? cart.cart_item.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
        : 0

    return (
        <div>
            {user ? <div> {user.name} User cart</div> : ''}
            {cart
                ?
                <div>{cart.cart_item.map((item) =>
                    <div>
                        {item.product.title} - {item.product.price} - {item.quantity}
                        <button onClick={() => dispatch(remove_item_from_cart(item.id))}>-1</button>
                        <button onClick={() => dispatch(add_item_to_cart(item.product.id, cart.id))}>+1</button>
                    </div>)}
                </div>
                : ''
            }

            <div>Total: {total} $.</div>  
        </div >
    )
}

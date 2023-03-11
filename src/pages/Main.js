import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_item } from '../redux/item_actions'
import { Link } from 'react-router-dom'
import { add_item_to_cart } from '../redux/cart_actions'
import { Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import MainBlock from '../component/MainBlock'

export default function Main() {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];
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
            <ImageList sx={{ width: '100%', height: '100%', mt: 15 }} cols={2} rowHeight={164} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
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

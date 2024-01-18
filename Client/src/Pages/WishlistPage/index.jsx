import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
    const { wish, deleteWish } = useContext(WishlistContext)
    return (
        <div>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <h1>Wishlist</h1>

            {wish && wish.map(x =>
                <ul>
                    <li>{x.name}</li>
                    <li>{x.info}</li>
                    <li>{x.price}</li>
                    <li onClick={() => deleteWish(x)}><button>Delete</button></li>
                </ul>
            )

            }
        </div>
    )
}

export default Wishlist

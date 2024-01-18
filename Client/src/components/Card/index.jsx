import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './index.scss'
import { useContext } from 'react';
import { WishlistContext } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';
const Card = ({ id, name, info, price, product }) => {
    const { addWish } = useContext(WishlistContext)
    return (
        <>
            <div className="CardArea">
                <div className="CardBox" >
                    <div className="name">
                        <h1>{name}</h1>
                        <div onClick={() => addWish(product)}> <FaHeart className='fa' /></div>
                        <div> <Link to={`/${id}`}><FaEye className='fa' /></Link></div>

                    </div>
                    <div className="info">
                        <h4>{info}</h4>
                        <p></p>
                        <h1>${price}</h1>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Card

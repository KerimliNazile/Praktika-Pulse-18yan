import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const Menu = () => {
    const [product, setProduct] = useState([])
    async function getProduct() {
        const data = await fetch("http://localhost:5000/dinners")
        const res = await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <section id='Menu'>
                <div className="MenuArea">
                    <div className="MenuText">
                        <h1>OUR MENU</h1>
                    </div>
                    <div className="MenuUl">
                        <ul className='ul'>
                            <li>Breakfast</li>
                            <li>Brunch</li>
                            <li>Lunch</li>
                            <li>Dinner</li>
                        </ul>
                    </div>
                    <div className="MenuBoxArea">
                        {product && product.map((item) => (
                            <Card key={item._id} id={item._id} name={item.name} info={item.info} price={item.price} product={item} />

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu

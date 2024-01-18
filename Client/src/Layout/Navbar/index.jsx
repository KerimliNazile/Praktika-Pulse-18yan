import React, { useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import './index.scss'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav>
                <div className="Pulse">
                    <h1>Pulse.</h1>
                </div>
                <div className="NavbarMain">
                    <ul id='navbarUl'>
                        <li><NavLink to={"/home"}>Home</NavLink></li>
                        <li>About Us</li>
                        <li>Restaurant</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="Reservation">
                    <h4>Reservations</h4>
                    <IoIosCall />
                    <span> 652-345 3222 11</span>
                </div>
                <div id='mobile'>
                    {
                        isOpen ? <IoClose /> : <GiHamburgerMenu className='burger'/>
                    }
                </div>
            </nav>
            <div className={`${setIsOpen ? 'navlist_active' : 'navlist_close'}navlist `}>
                <ul>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li>About Us</li>
                    <li>Restaurant</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar

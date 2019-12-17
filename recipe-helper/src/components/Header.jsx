import React from 'react';
import './Header.css'
import './images/fridge.png'
import Nav from './Nav'



const Header = () => {
    return (
    
            <div className="header-container">
                <div className="header-home">
                    <p>Home</p>
                    <p className="recipes"> Find Recipes</p>
                    <p>Contact</p>
                    <p>About Us</p>
                    <Nav/>
                </div>
                <div className="header-logo">
                    <img src='./images/fridge.png' alt="logo"></img>
                    <p>Fridge Food</p>
                </div>
                <div className="food-container">
                    <p>search placeholder</p>
                </div>
            </div>
    
    )
}

export default Header
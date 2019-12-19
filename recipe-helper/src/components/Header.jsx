import React from 'react';
import '../styles/Header.css'
import fridge from './images/fridge-orange.png'
import Nav from './Nav'


const Header = () => {
    return (
    
            <div className="header-container">
                <div className="header-home">
                    <p>Home</p>
                    <p className="recipes"> Find Recipes</p>
                    <p>Contact</p>
                    <p>About Us</p>
                </div>
                <Nav />
                <div className="header-logo">
                    <img className="fridge" src={fridge} alt="logo"></img>
                    <p>Fridge Food</p>
                </div>
                <div className="food-container">
                    <p>search placeholder</p>
                </div>
            </div>
    
    )
}

export default Header
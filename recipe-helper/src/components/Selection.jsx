import React from 'react';
import FoodSearch from './FoodSearch.jsx'
import FoodRestriction from './FoodRestriction'
import '../styles/Selection.css'

const Selection = (props) => {
    return (
        <div className='search-container'>
            <p className='search-heading'>Find Recipes:</p>
            <div className='dropdown-container'>     
                <FoodSearch renderResults={props.renderResults} renderAddedFoods={props.renderAddedFoods} handleChange={props.handleInput} />
                <FoodRestriction onCheck={props.handleCheck} />
            </div>
            <button className='search-button' onClick={props.onClickSearch}>Search</button>
        </div>
    )
}

export default Selection
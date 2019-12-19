import React from 'react';
import FoodSearch from './FoodSearch.jsx'
import FoodRestriction from './FoodRestriction'
import '../styles/Selection.css'
import Axios from 'axios'
const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN


class Selection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [],
            inputValue: [],
            view: false
        }
    }


    fetchRestrictedFoods = async (query, restrictions) => {
        try {
            const ingredients = await Axios.get(`https://api.edamam.com/search?q=${query}&Health=${restrictions}&app_id=1da5f0ed&app_key=${IEX_TOKEN}`)
            console.log(ingredients)

            this.setState({
                ingredients: ingredients.data.hits
            })
            console.log(this.state.ingredients)
            this.setState({
                view: true
            })

        } catch (error) {

        }

    }
    handleChange = (event) => {

        this.setState({ inputValue: event.target.value });
    }

    render() {
        const results = this.state.ingredients && this.state.ingredients.map((ing) => {
            return (
                <div className="thefoodcard">
                    <div className="foodimg">
                        <img src={ing.recipe.image} alt="" />
                    </div>
                    <div className="content">
                        <div className="label">
                            {ing.recipe.label}
                        </div>
                        <div className="ingredientLines">
                            {ing.recipe.ingredients.map((ingredient) => {
                                return (
                                    <div>{ingredient.text} </div>
                                )
                            })}
                        </div>
                        <a href={ing.recipe.url}>SEE THE FULL RECIPE</a>
                    </div>
                </div>

            )
        })

        return (

            <div className='search-container'>
                <p className='search-heading'>Find Recipes:</p>
                <div className='dropdown-container'>
                    <FoodSearch renderResults={this.props.renderResults} renderAddedFoods={this.props.renderAddedFoods} handleChange={this.props.handleInput} />
                    <FoodRestriction onCheck={this.props.handleCheck} />
                </div>
                <div className="search">
                    <input className="searchbar" type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="What do you want to eat" />
                    <div className='searchicon'></div>
                </div>
                <button className='search-button' onClick={() => this.fetchRestrictedFoods(this.state.inputValue, this.props.restrictedFoods)}>Search</button>
                {results}
            </div>


        )
    }
}
export default Selection
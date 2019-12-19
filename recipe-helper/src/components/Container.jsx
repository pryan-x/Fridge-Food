import React, { Component } from 'react'
import Selection from './Selection.jsx'
import Fuse from 'fuse.js';
import { list } from './foods'
import Header from '../components/Header' 

const options = {
    shouldSort: true,
    findAllMatches: true,
    includeScore: true,
    threshold: 0.45,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
        "name"
    ],
    id: "name"
};
const fuse = new Fuse(list, options);



class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            results: [],
            input: '',
            addedFoods: [],
            foodRestrictions: [],
            tempRef: null
        }
    }

    searchforResults = (input) => {
        let results = fuse.search(`${input}`)
        let simplifiedResults = []
        
        for (let i = 0; i < 4; i++) {
            if (results[i]) {
                simplifiedResults.push(results[i])
            }
        }
        this.setState({ results: simplifiedResults });
    }

    renderResults = () => {
            if (this.state.input.length === 0) {
                return 
            } else {
            return this.state.results.map((result, index) => (
                <button className='result food-container' key={index} onClick={() => this.addFood(result.item)}><p key={index}>{result.item}</p><span>+</span></button>
            ))}
    }

    renderAddedFoods = () => {
        return (
            this.state.addedFoods.map((result, index) => (
                <div onClick={() => this.removeFood(index)} className='food-container'>
                <p className='food' key={index}>{result}</p><span>–</span>
                </div>
            ))
        )
    }

    addFood = (item) => {
        if (!this.state.addedFoods.includes(item)) {
            this.setState(prevState => (
                { addedFoods: [...prevState.addedFoods, item] }
            ))
        }
    }

    removeFood = (item) => {
        let temp = this.state.addedFoods
        temp.splice(item, 1)
        this.setState({
            addedFoods: temp
        })
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value })
        if(this.state.input) {
            this.searchforResults(this.state.input)
        }
    }

    handleCheck = (restriction) => {
        if(this.state.foodRestrictions.includes(restriction)) {
            let temp = this.state.foodRestrictions
            this.state.foodRestrictions.splice(temp.indexOf(restriction), 1)
            this.setState({ 
                foodRestrictions: temp 
            })
        } else {
            this.setState(prevState => ({ 
                foodRestrictions: [...prevState.foodRestrictions, restriction]
            }))
        }
    }

    // render() { 
    //     return (  
    //         <div className='body'>
    //             <Selection handleCheck={this.handleCheck} handleInput={this.handleInput} removeFood={this.removeFood} addFood={this.addFood} renderAddedFoods={this.renderAddedFoods} renderResults={this.renderResults} searchforResults={this.searchforResults}/>
    //         </div>

    render() {
        return (
            <>
                <Header/>
                <Selection handleCheck={this.handleCheck} handleInput={this.handleInput} removeFood={this.removeFood} addFood={this.addFood} renderAddedFoods={this.renderAddedFoods} renderResults={this.renderResults} onClickSearch={this.searchforResults} foodRestrictions={this.state.foodRestrictions} addedFoods={this.state.addedFoods}/>
            </>
        )
    } 
}

export default Container;
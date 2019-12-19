import React, { Component } from 'react';
import Gallery from './Gallery'
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
            input: null,
            addedFoods: [],
            foodRestrictions: []
        }
    }

    searchforResults = (input) => {
        let results = fuse.search(`${input}`)
        let simplifiedResults = []
        
        for (let i = 0; i < 7; i++) {
            if (results[i]) {
                simplifiedResults.push(results[i])
            }
        }
        this.setState({ results: simplifiedResults });
    }

    renderResults = () => {
        return (
            this.state.results.map((result, index) => (
                <button key={index} onClick={() => this.addFood(result.item)}>{result.item}</button>
            ))
        )
    }

    renderAddedFoods = () => {
        return (
            this.state.addedFoods.map((result, index) => (
                <div key={index} onClick={() => this.removeFood(index)}>{result}</div>
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

    render() {
        return (
            <>
                <Header/>
                <Selection handleCheck={this.handleCheck} handleInput={this.handleInput} removeFood={this.removeFood} addFood={this.addFood} renderAddedFoods={this.renderAddedFoods} renderResults={this.renderResults} onClickSearch={this.searchforResults} foodRestrictions={this.state.foodRestrictions}/>
                <br></br>
                <br></br>
                <p style={{fontFamily: 'georgia', fontSize: '2em'}}>Popular Picks</p>
                <Gallery />
            </>
        )
    } 
}

export default Container;
import React from 'react';
import '../styles/FoodSearch.css'

class FoodSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'flex'
        }
    }

    clickToDisplay = () => {
        // if (this.state.display === 'none') {
        //     this.setState({ display: 'flex' });
        // } else {
        //     this.setState({ display: 'none' });
        // }
    }

    render() {
        return (
            <div className='search-dropdown' onClick={this.clickToDisplay}>
                <p className='dropdown-prompt'>What I Have</p>
                <div className='search-dropdown-menu' style={{ display: `${this.state.display}`}}>
                    <input onChange={this.props.handleChange} placeholder='Add an ingredient you have' />
                    <div className='results'>{this.props.renderResults()}</div>
                    <div className='added-foods'>{this.props.renderAddedFoods()}</div>
                </div>
                <div className='symbol-container'>
                
                </div>
            </div>
        )
    }
}
export default FoodSearch
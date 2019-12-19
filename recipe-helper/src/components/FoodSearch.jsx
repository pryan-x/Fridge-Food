import React from 'react';
import '../styles/FoodSearch.css'

class FoodSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'none',
            rotate: '0'
        }
    }

    clickToDisplay = () => {
        if (this.state.display === 'none') {
            this.setState({ display: 'flex', rotate: '180' });
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            this.setState({ display: 'none', rotate: '0' });
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.clickToDisplay()
        }
    }

    render() {
        return (
            <div ref={this.setWrapperRef} className='dropdown-wrapper'>
                <div className='search-dropdown' onClick={this.clickToDisplay}>
                    <p className='dropdown-prompt'>What I Have</p>

                    <div className='symbol-container'>
                        <img style={{ height: '42px', transform: `rotate(${this.state.rotate}deg)` }} src={require('../dropdown_arrow.png')} />
                    </div>
                </div>
                <div className='search-dropdown-menu' style={{ display: `${this.state.display}` }}>
                    <input className='searchbar' onChange={this.props.handleChange} placeholder='Search ingredients' />
                    <div className='results'>{this.props.renderResults()}</div>
                    <div className='added-foods'><p className='dropdown-text'>Added Foods: </p>{this.props.renderAddedFoods()}</div>
                    <div className='ok-container'>
                        <button className='search-button' onClick={this.clickToDisplay}>Ok</button>
                    </div>

                </div>
            </div>
        )

    }
}
export default FoodSearch
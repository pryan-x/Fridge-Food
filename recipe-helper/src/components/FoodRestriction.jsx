import React from 'react';
import '../styles/FoodRestriction.css'
const restrictions = ['Crustcean-free', 'Shellfish-free', 'Dairy-free', 'Egg-free', 'Fish-free', 'Peanut-free', 'Tree Nut-free', 'Gluten-free', 'Soy-free', 'Pork-free', 'Pescatarian', 'Kosher', 'Vegetarian', 'Vegan']

class FoodRestriction extends React.Component {
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

        const restrictionList = restrictions.map((restriction, index) => (
            <div key={index} className='checkbox-container'>
                <input type='checkbox' onChange={() => this.props.onCheck(restriction)} />
                <p className='food-restriction'>{restriction}</p>
            </div>
        ))

        return (
            <div ref={this.setWrapperRef} className='dropdown-wrapper'>
                <div className='checkbox-dropdown' onClick={this.clickToDisplay}>
                    <p className='dropdown-prompt'>Food Restrictions</p>


                    <div className='symbol-container'>
                        <img style={{ height: '42px', transform: `rotate(${this.state.rotate}deg)`}} src={require('../dropdown_arrow.png')} />
                    </div>
                </div>
                <div className='checkbox-dropdown-menu' style={{ display: `${this.state.display}` }}>
                    {restrictionList}
                    <div className='ok-container'>
                        <button className='search-button' onClick={this.clickToDisplay}>Ok</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default FoodRestriction
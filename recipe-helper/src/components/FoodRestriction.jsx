import React from 'react';
import '../styles/FoodRestriction.css'
const restrictions = ['Crustcean-free', 'Shellfish-free', 'Dairy-free', 'Egg-free', 'Fish-free', 'Peanut-free', 'Tree Nut-free', 'Gluten-free', 'Soy-free', 'Pork-free', 'Pescatarian', 'Kosher', 'Vegetarian', 'Vegan']

class FoodRestriction extends React.Component {
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

        const restrictionList = restrictions.map((restriction, index) => (
            <div key={index} className='checkbox-container'>
                <input type='checkbox' onChange={() => this.props.onCheck(restriction)} />
                {restriction}
            </div>
        ))

        return (
            <div className='checkbox-dropdown' onClick={this.clickToDisplay}>
                <p className='dropdown-prompt'>Food Restrictions</p>
                <div className='checkbox-dropdown-menu' style={{ display: `${this.state.display}`}}>
                    {restrictionList}
                </div>
                <div className='symbol-container'>
                
                </div>
            </div>
        )
    }
}
export default FoodRestriction
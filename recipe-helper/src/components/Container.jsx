import React, { Component } from 'react';
import Header from '../components/Header'


class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <Header/>
                <p>Container</p>

            </div>
        )
    } 
}

export default Container;
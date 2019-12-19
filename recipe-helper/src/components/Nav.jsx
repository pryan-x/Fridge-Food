import React from 'react'
import Sidebar from "react-sidebar";
import '../styles/Nav.css'
import menu from './images/hamburger-icon.png'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: false
        }
    }
    onSetSidebarOpen(open) {
        this.setState({
            sidebarOpen: open
        })
    }

    render() {
        return (
            <Sidebar
                sidebar={
                    <div className="sidebar-nav">
                        <div className="close-nav">
                            <button onClick={() => this.onSetSidebarOpen(false)}>
                                X
                            </button>
                        </div>
                        <div className="navbar">
                            <h1>Menu</h1>
                            <p>Home</p>
                            <hr></hr>
                            <p>Find Recipes</p>
                            <hr></hr>
                            <p>Contact</p>
                            <hr></hr>
                            <p>About Us</p>
                            <hr></hr>
                        </div>
                    </div>

                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onsetSidebarOpen}
                styles={{ sidebar: { background: "white", width: "40%", position: "fixed"} }}
            >
                <button className="sidebarbtn" onClick={() => this.onSetSidebarOpen(true)}>
                    <img className="menu" src={menu} alt="menu"></img>
                    Menu
                </button>

            </Sidebar>
        )
    }
}

export default Nav
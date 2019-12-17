import React from 'react'
import Sidebar from "react-sidebar";

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
                        <p>Home</p>
                        <p className="recipes"> Find Recipes</p>
                        <p>Contact</p>
                        <p>About Us</p>
                    </div>
                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onsetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                    Open sideBar
                </button>
                
            </Sidebar>
        )
    }
}

export default Nav
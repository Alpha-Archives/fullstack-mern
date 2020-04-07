import React, {Component} from 'react';

import Sidebar from "./Sidebar";
import Content from "./Content";
import Nav from "./Nav";


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-main-wrapper">
                <Nav/>
                <Sidebar/>
                <Content/>
            </div>
        );
    }
}

export default Dashboard;
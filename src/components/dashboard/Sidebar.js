import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="nav-left-sidebar sidebar-primary">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="d-xl-none d-lg-none" href={"/dashboard"}>Dashboard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href={"/dashboard"}>
                                        <i className="fa fa-fw fa-user-circle"/>Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href={"/ideas"} >
                                        <i className="fa fa-fw fa-lightbulb"/>Ideas
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href={"/ideas"} >
                                        <i className="fa fa-fw fa-certificate"/>Proposals
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href={"/ideas"} >
                                        <i className="fa fa-fw fa-file"/>Projects
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;
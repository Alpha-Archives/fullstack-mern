import React, {Component} from 'react';
import Nav from "../dashboard/Nav";
import Sidebar from "../dashboard/Sidebar";
import ProfileContent from "./ProfileContent";

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="dashboard-main-wrapper">
                    <Nav/>
                    <Sidebar/>
                    <ProfileContent/>
                </div>
            </div>
        );
    }
}

export default Profile;
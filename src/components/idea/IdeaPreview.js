import React, {Component} from 'react';
import Nav from "../dashboard/Nav";
import Sidebar from "../dashboard/Sidebar";
import ChatContent from "./ChatContent";
import DocumentContent from "./DocumentContent";
import IdeaTimeline from "./IdeaTimeline";

class IdeaPreview extends Component {
    render() {
        return (
            <div className="dashboard-main-wrapper">
                <Nav/>
                <Sidebar/>
                <div className="dashboard-wrapper mt-3 p-3">
                    <div className="main-container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Documents</h5>
                                    <div className="card-body">
                                        <DocumentContent/>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="float-right">
                                            <select className="custom-select">
                                                <option selected>Today</option>
                                                <option value="1">Weekly</option>
                                                <option value="2">Monthly</option>
                                                <option value="3">Yearly</option>
                                            </select>
                                        </div>
                                        <h5 className="mb-0">Summary</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className={"row"}>
                                            <div className={"col-md-12"}>
                                                <h2>Title: Youth For Change
                                                    <br/>
                                                    <sub>SubTitle: Youth For Change IN Rurual Villages by USAID</sub>
                                                </h2>
                                                <p className={"lead"}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias deserunt dolores eaque magni vero? Deserunt dignissimos doloremque dolorum ducimus eveniet id in minus placeat quia sint, tenetur, velit voluptates.
                                                </p>
                                            </div>

                                        </div>

                                        <hr/>
                                        <div className={"row"}>
                                            <div className={"col-md-6"}>
                                                <p className={"lead"}>Budget: <br/>
                                                Capital in USD: $ 2600/=<br/>
                                                Return in USD: $ 5100/=
                                                </p></div>
                                            <div className={"col-md-6"}>
                                                <p className={"lead"}>Estimates: PDD MECHS</p></div>
                                        </div>
                                        <hr/>
                                        <div className={"row"}>
                                            <div className={"col-md-6"}>
                                                <p className={"lead"}>Specific Call: We live for today</p></div>
                                            <div className={"col-md-6"}>
                                                <p className={"lead"}>Requirements: PDD MECHS</p></div>
                                        </div>
                                        <hr/>
                                        <div className={"row"}>
                                            <div className={"col-md-6"}>
                                                <button className={"btn btn-sm float-right"}>➕</button>
                                                <p className={"lead"}>Collaborators:
                                                    <ol>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Consectetur adipiscing elit</li>
                                                    </ol>
                                                </p>
                                            </div>
                                            <div className={"col-md-6"}><p className={"lead"}>Funders:
                                                <ol>
                                                    <li>NHIF (Prime)</li>
                                                    <li>USAID (Normal Funder)</li>
                                                </ol>
                                            </p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Activities</h5>
                                    <div className="card-body p-0">
                                        {/*<ChatContent/>*/}
                                        <IdeaTimeline/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default IdeaPreview;
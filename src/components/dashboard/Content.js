import React ,{ Component } from 'react';


class Content extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="dashboard-ecommerce">
                    <div className="container-fluid dashboard-content ">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title">Dashboard</h2>
                                    <p className="pageheader-text">Nulla eus at enim quis massa lobortis rutrum.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href={"/dashboard"} className="breadcrumb-link">Dashboard</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    My Dashboard
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ecommerce-widget">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Total Concepts</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">12</h1>
                                            </div>
                                            <div
                                                className="metric-label d-inline-block float-right text-success font-weight-bold">
                                                <span><i className="fa fa-fw fa-arrow-up"/></span><span>5.86%</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Proposals</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">09</h1>
                                            </div>
                                            <div
                                                className="metric-label d-inline-block float-right text-success font-weight-bold">
                                                <span><i className="fa fa-fw fa-arrow-up"/></span><span>5.86%</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Refunds</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">00</h1>
                                            </div>
                                            <div
                                                className="metric-label d-inline-block float-right text-primary font-weight-bold">
                                                <span>N/A</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="text-muted">Avg. Idea Per User</h5>
                                            <div className="metric-value d-inline-block">
                                                <h1 className="mb-1">2.12</h1>
                                            </div>
                                            <div
                                                className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                                                <span>-2.00%</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end of e commerce*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
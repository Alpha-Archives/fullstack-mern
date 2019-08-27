import React, {Component} from 'react';

class ProfileContent extends Component {


    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="influence-profile">
                    <div className="container-fluid dashboard-content ">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h3 className="mb-2">Profile </h3>
                                    <p className="pageheader-text">Proin placerat antei. Morbi lobortis pulvinar
                                        quam.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href={"/"}
                                                                                   className="breadcrumb-link">Dashboard</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">My Profile
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">

                                <div className="card">
                                    <div className="card-body">
                                        <div className="user-avatar text-center d-block">
                                            <img src={"assets/images/avatar-1.jpg"} alt="User Avatar"
                                                 className="rounded-circle user-avatar-xxl"/>
                                        </div>
                                        <div className="text-center">
                                            <h2 className="font-24 mb-0">James Cdo</h2>
                                            <p>Project Manager @Mumbosoft</p>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="font-16">Contact Information</h3>
                                        <div className="">
                                            <ul className="list-unstyled mb-0">
                                                <li className="mb-2"><i className={"fas fa-fw fa-envelope mr-2"}/>james@gmail.com
                                                </li>
                                                <li className="mb-0"><i className="fas fa-fw fa-phone mr-2"/>(255) 123
                                                    4567
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="font-16">Social Channels</h3>
                                        <div className="">
                                            <ul className="mb-0 list-unstyled">
                                                <li className="mb-1"><a href="#"><i
                                                    className={"fab fa-fw fa-facebook-square mr-1 facebook-color"}/>fb.me/james</a>
                                                </li>
                                                <li className="mb-1"><a href="#"><i
                                                    className={"fab fa-fw fa-twitter-square mr-1 twitter-color"}/>twitter.com/james</a>
                                                </li>
                                                <li className="mb-1"><a href="#"><i
                                                    className={"fab fa-fw fa-instagram mr-1 instagram-color"}/>instagram.com/james</a>
                                                </li>
                                                <li className="mb-1"><a href="#"><i
                                                    className={"fas fa-fw fa-rss-square mr-1 rss-color"}/>james.com/blog</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <h3 className="font-16">Category</h3>
                                        <div>
                                            <a href="#" className="badge badge-light mr-1">Fitness</a>
                                            <a href="#" className="badge badge-light mr-1">Life Style</a>
                                            <a href="#" className="badge badge-light mr-1">Gym</a>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-xl-9 col-lg-9 col-md-7 col-sm-12 col-12">

                                <div className="influence-profile-content pills-regular">
                                    <ul className="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-campaign-tab" data-toggle="pill"
                                               href={"#pills-campaign"} role="tab" aria-controls="pills-campaign"
                                               aria-selected="true">Campaign</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-packages-tab" data-toggle="pill"
                                               href={"#pills-packages"} role="tab" aria-controls="pills-packages"
                                               aria-selected="false">Packages</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-review-tab" data-toggle="pill"
                                               href={"#pills-review"}
                                               role="tab" aria-controls="pills-review" aria-selected="false">Reviews</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-msg-tab" data-toggle="pill"
                                               href={"#pills-msg"}
                                               role="tab" aria-controls="pills-msg" aria-selected="false">Send
                                                Messages</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-campaign" role="tabpanel"
                                             aria-labelledby="pills-campaign-tab">
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="section-block">
                                                        <h3 className="section-title">Currecnt Stats</h3>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h1 className="mb-1">9</h1>
                                                            <p>Concept Notes</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h1 className="mb-1">35</h1>
                                                            <p>Proposals</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h1 className="mb-1">8</h1>
                                                            <p>Award Letters</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h1 className="mb-1">1</h1>
                                                            <p>Projects</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="section-block">
                                                <h3 className="section-title">Recent Ideas</h3>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="media influencer-profile-data d-flex align-items-center p-2">
                                                                <div className="mr-4">
                                                                    <img src={"assets/images/slack.png"}
                                                                         alt="User Avatar" className="user-avatar-lg"/>
                                                                </div>
                                                                <div className="media-body ">
                                                                    <div className="influencer-profile-data">
                                                                        <h3 className="m-b-10">Youth For Children</h3>
                                                                        <p>
                                                                        <span className="m-r-20 d-inline-block">Draft Due Date
                                                                            <span className="m-l-10 text-primary">24 Jan 2018</span>
                                                                        </span>
                                                                            <span className="m-r-20 d-inline-block"> Publish Date
                                                                            <span className="m-l-10 text-secondary">30 Sept 2019</span>
                                                                        </span>
                                                                            <span
                                                                                className="m-r-20 d-inline-block">Ends <span
                                                                                className="m-l-10  text-info">30 Jan 2020</span>
                                                                        </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-top card-footer p-0">
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0">45k</h4>
                                                        <p>Total Reach</p>
                                                    </div>
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0">29k</h4>
                                                        <p>Total Views</p>
                                                    </div>
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0">5k</h4>
                                                        <p>Total Click</p>
                                                    </div>
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0">4k</h4>
                                                        <p>Engagement</p>
                                                    </div>
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0">2k</h4>
                                                        <p>Conversion</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div
                                                                className="media influencer-profile-data d-flex align-items-center p-2">
                                                                <div className="mr-4">
                                                                    <img src={"assets/images/dribbble.png"}
                                                                         alt="User Avatar"
                                                                         className="rounded-circle user-avatar-lg"/>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h3 className="m-b-10">Mumbo Initiative</h3>
                                                                    <p><span className="m-r-20 d-inline-block">Draft Due Date<span
                                                                        className="m-l-10 d-inline-block text-primary">28 Jan 2018</span></span><span
                                                                        className="m-r-20 d-inline-block"> Publish Date<span
                                                                        className="m-l-10 text-secondary">20 Oct 2019</span></span><span
                                                                        className="m-r-20">Ends<span
                                                                        className="m-l-10 text-info">10 Nov, 2019</span></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-top card-footer p-0">
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0 ">3</h4>
                                                        <p>Collaborators</p>
                                                    </div>
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0 ">4</h4>
                                                        <p>Funds</p>
                                                    </div>
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0">18</h4>
                                                        <p>Comments</p>
                                                    </div>
                                                    <div className="campaign-metrics d-xl-inline-block">
                                                        <h4 className="mb-0 ">10</h4>
                                                        <p>Engagement</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-packages" role="tabpanel"
                                             aria-labelledby="pills-packages-tab">
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="section-block">
                                                        <h2 className="section-title">My Packages</h2>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-center p-3 ">
                                                            <h4 className="mb-0 text-white"> Basic</h4>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <h1 className="mb-1">$150</h1>
                                                            <p>Per Month Plateform</p>
                                                        </div>
                                                        <div className="card-body border-top">
                                                            <ul className="list-unstyled bullet-check font-14">
                                                                <li>Facebook, Instagram, Pinterest,Snapchat.</li>
                                                                <li>Guaranteed follower growth for increas brand
                                                                    awareness.
                                                                </li>
                                                                <li>Daily updates on choose platforms</li>
                                                                <li>Stronger customer service through daily
                                                                    interaction
                                                                </li>
                                                                <li>Monthly progress report</li>
                                                                <li>1 Million Followers</li>
                                                            </ul>
                                                            <a href="#"
                                                               className="btn btn-outline-secondary btn-block btn-lg">Get
                                                                Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                    <div className="card">
                                                        <div className="card-header bg-info text-center p-3">
                                                            <h4 className="mb-0 text-white"> Standard</h4>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <h1 className="mb-1">$350</h1>
                                                            <p>Per Month Plateform</p>
                                                        </div>
                                                        <div className="card-body border-top">
                                                            <ul className="list-unstyled bullet-check font-14">
                                                                <li>Facebook, Instagram, Pinterest,Snapchat.</li>
                                                                <li>Guaranteed follower growth for increas brand
                                                                    awareness.
                                                                </li>
                                                                <li>Daily updates on choose platforms</li>
                                                                <li>Stronger customer service through daily
                                                                    interaction
                                                                </li>
                                                                <li>Monthly progress report</li>
                                                                <li>2 Blog Post & 3 Social Post</li>
                                                                <li>5 Millions Followers</li>
                                                                <li>Growth Result</li>
                                                            </ul>
                                                            <a href="#" className="btn btn-secondary btn-block btn-lg">Get
                                                                Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-center p-3">
                                                            <h4 className="mb-0 text-white">Premium</h4>
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <h1 className="mb-1">$550</h1>
                                                            <p>Per Month Plateform</p>
                                                        </div>
                                                        <div className="card-body border-top">
                                                            <ul className="list-unstyled bullet-check font-14">
                                                                <li>Facebook, Instagram, Pinterest,Snapchat.</li>
                                                                <li>Guaranteed follower growth for increas brand
                                                                    awareness.
                                                                </li>
                                                                <li>Daily updates on choose platforms</li>
                                                                <li>Stronger customer service through daily
                                                                    interaction
                                                                </li>
                                                                <li>Monthly progress report & Growth Result</li>
                                                                <li>4 Blog Post & 6 Social Post</li>
                                                            </ul>
                                                            <a href="#" className="btn btn-secondary btn-block btn-lg">Contact
                                                                us</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-review" role="tabpanel"
                                             aria-labelledby="pills-review-tab">
                                            <div className="card">
                                                <h5 className="card-header">Campaign Reviews</h5>
                                                <div className="card-body">
                                                    <div className="review-block">
                                                        <p className="review-text font-italic m-0">“Quisque lobortis
                                                            vestibulum
                                                            elit, vel fermentum elit pretium et. Nullam id ultrices
                                                            odio. Cras id
                                                            nulla mollis, molestie diam eu, facilisis tortor. Mauris
                                                            ultrices lectus
                                                            laoreet commodo hendrerit. Nullam varius arcu sed aliquam
                                                            imperdiet.
                                                            Etiam ut luctus augue.”</p>
                                                        <div className="rating-star mb-4">
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                        </div>
                                                        <span
                                                            className="text-dark font-weight-bold">Tabitha C. Campbell</span>
                                                        <small className="text-mute"> (Company name)</small>
                                                    </div>
                                                </div>
                                                <div className="card-body border-top">
                                                    <div className="review-block">
                                                        <p className="review-text font-italic m-0">“Maecenas rutrum
                                                            viverra augue.
                                                            Nulla in eros vitae ante ullamcorper congue. Praesent
                                                            tristique massa ac
                                                            arcu dapibus tincidunt. Mauris arcu mi, lacinia et ipsum
                                                            vel,
                                                            sollicitudin laoreet risus.”</p>
                                                        <div className="rating-star mb-4">
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                        </div>
                                                        <span
                                                            className="text-dark font-weight-bold">Luise M. Michet</span>
                                                        <small className="text-mute"> (Company name)</small>
                                                    </div>
                                                </div>


                                                <div className="card-body border-top">
                                                    <div className="review-block">
                                                        <p className="review-text font-italic m-0">“Integer pretium
                                                            laoreet mi
                                                            ultrices tincidunt. Suspendisse eget risus nec sapien
                                                            malesuada
                                                            ullamcorper eu ac sapien. Maecenas nulla orci, varius ac
                                                            tincidunt non,
                                                            ornare a sem. Aliquam sed massa volutpat, aliquet nibh sit
                                                            amet,
                                                            tincidunt ex. Donec interdum pharetra dignissim.”</p>
                                                        <div className="rating-star mb-4">
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                            <i className="fa fa-fw fa-star"/>
                                                        </div>
                                                        <span
                                                            className="text-dark font-weight-bold">Ruby B. Matheny</span>
                                                        <small className="text-mute"> (Company name)</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item"><a className="page-link"
                                                                                 href="#">Previous</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a>
                                                    </li>
                                                    <li className="page-item active"><a className="page-link "
                                                                                        href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">Next</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="tab-pane fade" id="pills-msg" role="tabpanel"
                                             aria-labelledby="pills-msg-tab">
                                            <div className="card">
                                                <h5 className="card-header">Send Messages</h5>
                                                <div className="card-body">
                                                    <form>
                                                        <div className="row">
                                                            <div
                                                                className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-3 col-md-12 col-sm-12 col-12 p-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="name">Your Name</label>
                                                                    <input type="text"
                                                                           className="form-control form-control-lg"
                                                                           id="name" placeholder=""/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="email">Your Email</label>
                                                                    <input type="email"
                                                                           className="form-control form-control-lg"
                                                                           id="email" placeholder=""/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="subject">Subject</label>
                                                                    <input type="text"
                                                                           className="form-control form-control-lg"
                                                                           id="subject" placeholder=""/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="messages">Messgaes</label>
                                                                    <textarea className="form-control" id="messages"
                                                                              rows="3"/>
                                                                </div>
                                                                <button type="submit"
                                                                        className="btn btn-primary float-right">Send
                                                                    Message
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
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


export default ProfileContent;
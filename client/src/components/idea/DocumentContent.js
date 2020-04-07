import React, {Component} from 'react';

class DocumentContent extends Component {
    render() {
        return (
            <div>
                    <div className="accrodion-regular">
                        <div id="accordion3">
                            <div className="card">
                                <div className="card-header" id="headingSeven">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse"
                                                data-target="#collapseSeven" aria-expanded="true"
                                                aria-controls="collapseSeven">
                                            <span className="fas fa-angle-down mr-3"/>Concept Notes</button>
                                    </h5>
                                </div>
                                <div id="collapseSeven" className="collapse show" aria-labelledby="headingSeven"
                                     data-parent="#accordion3">
                                    <div className="card-body">
                                        <p className=""> Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-2">
                                <div className="card-header" id="headingEight">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapseEight" aria-expanded="false"
                                                aria-controls="collapseEight">
                                            <span className="fas fa-angle-down mr-3"/>Proposals</button>
                                    </h5>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                                     data-parent="#accordion3">
                                    <div className="card-body">
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                        sapiente ea proident. Ad vegan excepteur butche ynth nesciunt you probably
                                        haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-2">
                                <div className="card-header" id="headingNine">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse"
                                                data-target="#collapseNine" aria-expanded="false"
                                                aria-controls="collapseNine">
                                            <span className="fas fa-angle-down mr-3"/>Certificates</button>
                                    </h5>
                                </div>
                                <div id="collapseNine" className="collapse" aria-labelledby="headingNine"
                                     data-parent="#accordion3">
                                    <div className="card-body">
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                        coffee nulla assumenda shoreditch et. Nihil
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default DocumentContent;
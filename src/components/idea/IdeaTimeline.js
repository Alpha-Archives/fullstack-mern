import React, {Component} from 'react';

class IdeaTimeline extends Component {
    render() {
        return (
            <section className="cd-timeline js-cd-timeline">
                <div className="cd-timeline__container">
                    <div className="cd-timeline__block js-cd-block  ">
                        <div className="cd-timeline__content js-cd-content p-2 m-0">
                            <h5>Idea Created</h5>
                            <p>Lorem ipsum dolor sit aitatis qui ut.</p>
                            {/*<a href={"#0"} className="btn btn-primary btn-sm">More</a>*/}
                            <span className="cd-timeline__date">12 July, 2019</span>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block ">
                        <div className="cd-timeline__content js-cd-content p-2 m-0">
                            <h5>2</h5>
                            <p>Lorem ipsum dolor sit amet,ad debitis unde?</p>
                            <span className="cd-timeline__date">20 July, 2019</span>
                        </div>
                    </div>
                    <div className="cd-timeline__block js-cd-block ">
                        <div className="cd-timeline__content js-cd-content p-2 m-0">
                            <h5>Title 3</h5>
                            <p>Lorem ipsum dolor sit amet, consect molque aut adipisci.</p>
                            <span className="cd-timeline__date">24 July, 2019</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default IdeaTimeline;
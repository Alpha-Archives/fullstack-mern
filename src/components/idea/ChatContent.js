import React, {Component} from 'react';

class ChatContent extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="chat-module">
                    <div className="chat-module-top">
                        <div className="chat-module-body m-0 p-0">
                            <div className="media chat-item">
                                <img alt="tanu" src={"../assets/images/avatar-3.jpg"}
                                     className="rounded-circle user-avatar-lg"/>
                                <div className="media-body">
                                    <div className="chat-item-title">
                                        <span className="chat-item-author">Tanu</span>
                                        <span>3 days ago</span>
                                    </div>
                                    <div className="chat-item-body">
                                        <p>Roger that boss! <a href="#">@Ravi</a> Donec quis ante ut felis tincidunt
                                            blandit. ðŸ”¥</p>
                                    </div>
                                </div>
                            </div>
                            <div className="media chat-item">
                                <img alt="William" src={"../assets/images/avatar-1.jpg"}
                                     className="rounded-circle user-avatar-lg"/>
                                <div className="media-body">
                                    <div className="chat-item-title">
                                        <span className="chat-item-author">William</span>
                                        <span>2 days ago</span>
                                    </div>
                                    <div className="chat-item-body">
                                        <p>Can't wait! <a href="#">@David</a> Curabitur nec massa ultrices,
                                            consequat erat sit amet, luctus justo. <a href="#"> Meeting</a>?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="media chat-item">
                                <img alt="Daniel" src={"../assets/images/avatar-2.jpg"}
                                     className="rounded-circle user-avatar-lg"/>
                                <div className="media-body">
                                    <div className="chat-item-title">
                                        <span className="chat-item-author">Daniel</span>
                                        <span>Yesterday</span>
                                    </div>
                                    <div className="chat-item-body">
                                        <p>Quisque condimentum elit quis nibh condimentum, in maximus tortor
                                            viverra. ðŸ¤“</p>
                                    </div>
                                    <div className="media media-attachment">
                                        <div className="avatar bg-primary">
                                            <i className={"fas fa-file"}/>
                                        </div>
                                        <div className="media-body">
                                            <a href="#" className="">questionnaire-draft.doc</a>
                                            <span>24kb Document</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media chat-item">
                                <img alt="Fallon" src={"../assets/images/avatar-3.jpg"}
                                     className="rounded-circle user-avatar-lg"/>
                                <div className="media-body">
                                    <div className="chat-item-title">
                                        <span className="chat-item-author">Fallon</span>
                                        <span>2 hours ago</span>
                                    </div>
                                    <div className="chat-item-body">
                                        <p>Great start guys, Fusce tempus ipsum a mi rutrum, at dignissim mauris
                                            vulputate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-module-bottom">
                        <form className="chat-form">
                            <textarea className="form-control" placeholder="Type message" rows="1"/>
                            <div className="chat-form-buttons">
                                <div className="custom-file custom-file-naked">
                                    <input type="file" className="custom-file-input" id="customFile"/>
                                    <label className="custom-file-label" htmlFor="customFile">
                                        <i className="fas fa-paperclip"/>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}


export default ChatContent;
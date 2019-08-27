import React, { Component } from 'react';
import IdeaList from "./idea/IdeaList";
import IdeaModal from "./idea/IdeaModal";
import Navbar from "./Navbar";
import {Container} from "reactstrap";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='container mt-3'>
                        <IdeaModal />
                </div>

                <Container>
                        <IdeaList />
                </Container>
            </div>
        );
    }
}

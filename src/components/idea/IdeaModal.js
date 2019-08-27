import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../../actions/ideaActions';

class IdeaModal extends Component {
    state = {modal: false, title: '', body: ''};

    toggle = () => {
        this.setState({modal: !this.state.modal});
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newIdea = {
            title: this.state.title,
            body: this.state.body
        };

        // Add item via addItem action
        this.props.addItem(newIdea);

        // Close modal
        this.toggle();
    };

    render() {
        return (
            <div>
                <h1>My Ideas
                    <Button color='dark' style={{marginLeft: '2rem'}} onClick={this.toggle}>
                        Add Idea
                    </Button>
                </h1>


                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to wander list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='title'>Idea title</Label>
                                <Input type='text' name='title' id='title'
                                       placeholder='Add your brilliant idea'
                                       onChange={this.onChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for='body'>Idea</Label>
                                <Input type='text' name='body' id='body'
                                       placeholder='Blah blah blah'
                                       onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button color='dark' style={{marginTop: '2rem'}} block>
                                    Add Idea
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(IdeaModal);
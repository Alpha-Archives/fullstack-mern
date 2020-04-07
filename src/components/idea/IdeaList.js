import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {deleteIdea, getIdeas} from '../../actions/ideaActions';
import PropTypes from 'prop-types';

class IdeaList extends Component {
    static propTypes = {
        getIdeas: PropTypes.func.isRequired,
        idea: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.getIdeas();
    }

    onDeleteClick = id => {
        this.props.deleteIdea(id);
    };

    render() {
        const {ideas} = this.props.idea;
        return (
            <ListGroup>
                <TransitionGroup className='idea-list'>
                    {ideas.map(({_id, title, body}) => (
                        <CSSTransition key={_id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                {this.props.isAuthenticated ? (
                                    <Button className='remove-btn' color='danger' size='sm'
                                            onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>) : null}
                                {title} - {body}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        );
    }
}

const mapStateToProps = state => ({
    idea: state.idea,
});

export default connect(mapStateToProps, {getIdeas, deleteIdea})(IdeaList);

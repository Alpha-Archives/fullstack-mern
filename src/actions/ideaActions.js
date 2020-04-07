import axios from 'axios';
import {ADD_IDEA, DELETE_IDEA, GET_IDEAS, IDEAS_LOADING} from './types';

let BASE_URL = 'https://cms-io.herokuapp.com';

export const getIdeas = () => dispatch => {
    // dispatch(setideasLoading());
    axios.get(BASE_URL +'/api/ideas')
        .then(res => dispatch({
                type: GET_IDEAS,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};

export const addItem = item => (dispatch, getState) => {
    axios.post(BASE_URL +'/api/ideas', item)
        .then(res =>
            dispatch({
                type: ADD_IDEA,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};

export const deleteIdea = id => (dispatch, getState) => {
    axios
        .delete(`${BASE_URL}/api/ideas/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_IDEA,
                payload: id
            })
        )
        .catch(err => console.log(err));
};

export const setIdeasLoading = () => {
    return {
        type: IDEAS_LOADING
    };
};

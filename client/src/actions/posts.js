import * as API from '../api/index';

// * Action creators: fns that return actions
// this is an asynchronos task, as we will have to wait for the data
// Redux Thunk is a middleware for the Redux library that allows you to write asynchronous logic in Redux actions.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await API.fetchPosts();
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch (err) {
        console.log(err.message);
    }
}
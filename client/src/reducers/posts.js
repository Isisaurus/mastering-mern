// A reducer is a function with 2 args (state, action) and a switch statement inside that returns conditionally based on action.type
const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}
export default reducer;
export default function catsReducer(state={ loading: false, pictures: [] }, action) {
    switch (action.type) {
        case 'LOADING_CATS': {
            return Object.assign({}, state, { loading: true })
            // Tell rest of site that fetchCats() has begun    
        }

        case 'FETCH_CATS': {
            return { loading: false, pictures: action.cats }
            // fetchCats() is complete. Return the information for use.
        }
        
        default: {
            return state;
        }
    }
}
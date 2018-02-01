import fetch from 'isomorphic-fetch';

export function fetchCats() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });
      return fetch('http://localhost:3000/db')
        .then(resp => resp.json())
        .then(resp => dispatch({ type: 'FETCH_CATS', cats: resp.images }));
    };
  }

/* 
When fetchCats() is called, dispatch an action to say that we are loading the data.

Call fetch() which hits the API (and returns a promise object).

Once promise resolves, dispatch another action with a type and the information that 
gets sent to the reducer.

export function fetchCats() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });
      return fetch('http://www.catapi.com')
        .then(response => response.json())
        .then(cats => dispatch({ type: 'FETCH_CATS', cats }));
    };
  }
*/
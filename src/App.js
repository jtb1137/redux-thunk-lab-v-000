import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import * as actions from './actions/catActions';
import { bindActionCreators } from 'redux';

class App extends Component {   
  // Function is called right after render() is called
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      // Using fetchCats() requires mapDispatchToProps()
      this.props.actions.fetchCats()
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

// Gets data from the state in Redux and makes it accessable as Props
function mapStateToProps(state) {
  return { catPics: state.cats.pictures }
}

// Gets dispatch functions in Redux and makes them accessable as Props
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}


export default App = connect(mapStateToProps, mapDispatchToProps)(App)

/*
Technically, a container component is just a React component that uses 
store.subscribe() to read a part of the Redux state tree and supply props to a 
presentational component it renders. You could write a container component by hand, 
but we suggest instead generating container components with the React Redux library's 
connect() function, which provides many useful optimizations to prevent unnecessary 
re-renders. 

To use connect(), you need to define mapStateToProps() that tells how to transform 
the current Redux store state into the props you want to pass to a presentational 
component you are wrapping
*/
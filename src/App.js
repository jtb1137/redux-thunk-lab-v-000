import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { fetchCats } from './actions/catActions';
import { connect } from 'react-redux';
import CatList from './CatList';

export class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {catPics: state.cats.pictures}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
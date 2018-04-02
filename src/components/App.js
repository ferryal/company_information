import React, { Component } from 'react';
import '../App.css';
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import getCompany from '../actions/get_company_list'
import CompanyList from './CompanyList'


class App extends Component {
  // componentDidMount() {
  //   this.props.getCompany()
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <CompanyList />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     company : state.company
//   }
// }
//
// function mapDispacthToProps(dispatch) {
//   return bindActionCreators({
//     getCompany : getCompany
//   }, dispatch)
// }

export default App;

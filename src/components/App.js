import React, { Component } from 'react';
import '../App.css';

import CompanyList from './CompanyList'
import CompanyForm from './CompanyForm'


class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="company_form">
          <h2>Create Company</h2>
          <CompanyForm />
        </div>
        <div className="office_form">
          <h2>Create Office</h2>
          <CompanyForm />
        </div>
        <div className="company_list">
          <CompanyList />
        </div>
      </div>
    );
  }
}

export default App;

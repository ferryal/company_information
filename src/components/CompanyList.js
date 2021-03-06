import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import getCompany from '../actions/get_company'

class CompanyList extends Component {
  componentDidMount() {
    this.props.getCompany()
  }
  renderCompany() {
    if (this.props.company) {
      return this.props.company.map ( r => {
        return (
          <div key={r.id} className="row">
            <ul>
              <li>{r.name}</li>
              <li>Address: {r.address}</li>
              <li>Revenue: {r.revenue}</li>
              <li>Phone No: {r.phone}</li>
            </ul>
          </div>
        )
      })
    }
  }


  render() {
    return (
      <div>
        <h1>Companies</h1>
        {this.renderCompany()}
      </div>
    )
  }
}

 const mapStateToProps = state => {
    return {
      company : state.company
    }
}

const mapDispacthToProps = dispatch => {
  return bindActionCreators({
    getCompany: getCompany
  }, dispatch)
}


export default connect(mapStateToProps, mapDispacthToProps)(CompanyList)

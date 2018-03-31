import React, { Component } from 'react'
import { connect } from 'react-redux'

class CompanyList extends Component {
  renderCompany() {
    if (this.props.company) {
      return this.props.company.map ( r => {
        return (
          <div key={r.id}>
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
        <h3>Companies</h3>
        {this.renderCompany()}
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
      company : state.company
    }
  }

export default connect(mapStateToProps, null)(CompanyList)

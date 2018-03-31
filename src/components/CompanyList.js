import React, { Component } from 'react'
import { connect } from 'react-redux'

class CompanyList extends Component {
  renderCompany() {
    if (this.props.addCompany) {
      return this.props.addCompany.map ( r => {
        return (
          <div>
            <h3>Company List</h3>
            <ul>
              <li>{r.name}</li>
              <li>{r.address}</li>
              <li>{r.phone}</li>
            </ul>
          </div>
        )
      })
    }
  }


  render() {
    return (
      <div>
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

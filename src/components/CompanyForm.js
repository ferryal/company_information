import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addCompany from '../actions/add_company'
import axios from 'axios'

class CompanyForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      revenue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      revenue: document.getElementById('revenue').value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
      // name: this.state.name,
      // address: this.state.address,
      // revenue: this.state.revenue

    axios.post(`${process.env.REACT_APP_API_URL}/company`, {
      name: this.state.name,
      address: this.state.address,
      revenue: this.state.revenue
    })
      .then(res => {
        // swal({
        //   title: 'Your Comments Has Been Created',
        //   text: 'Note: the resource will not be really updated on the server but it will be faked as if. Please check [console log] in Inspect',
        //   icon: 'success'
        // })
        console.log(res);
        console.log(res.data);
        // console.log(`Your New Comment: ${name}`);
    })

  }
  renderCompany() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div>
          <input
            placeholder="name company"
            type="text"
            name= "name"
            id="name"
            onChange={this.handleChange}
          />
          <br/>
          <input
            placeholder="address company"
            type="text"
            name="address"
            id= "address"
            onChange={this.handleChange}
          />
          <br/>
          <input
            placeholder="revenue company"
            type="number"
            name="revenue"
            id= "revenue"
            onChange={this.handleChange}
          />
          <br/>
          <button type="submit">save</button>
        </div>
      </form>
    )
  }
  render() {
    return (
      <div>
        {this.renderCompany()}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     addCompany : state.addCompany
//   }
// }
//
// const mapDispacthToProps = dispatch => {
//   return bindActionCreators({
//     addCompany: addCompany
//   }, dispatch)
// }


// export default connect(mapStateToProps, mapDispacthToProps)(CompanyForm)
export default CompanyForm

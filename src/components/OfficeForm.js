import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { Grid, Button, Form } from 'semantic-ui-react'

class OfficeForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      revenue: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      revenue: document.getElementById('revenue').value,
      phone: document.getElementById('phone').value
    })
  }

  handleSubmit = e => {
    // e.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/office`, {
      name: this.state.name,
      address: this.state.address,
      revenue: this.state.revenue,
      phone: this.state.phone
    }).then(res => {
        swal({
          title: 'Your Comments Has Been Created',
          text: 'Note: the resource will not be really updated on the server but it will be faked as if. Please check [console log] in Inspect',
          icon: 'success'
        })
        console.log(res);
        console.log(res.data);
    })

  }
  renderCompany() {
    return (
      <Form onSubmit={this.handleSubmit} widths={5}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="name office"
            type="text"
            name= "name"
            id="name"
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Form.Group>
        <Form.Field>
          <label>Location</label>
          <Form.Input
            placeholder="latitude"
            type="text"
            name="latitude"
            id= "latitude"
            onChange={this.handleChange}
            required
          />
          <Form.Input
            placeholder="longitude"
            type="text"
            name="longitude"
            id="longitude"
            onChange={this.handleChange}
            required
         />
        </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Office Start Date</label>
          <input
            placeholder="date"
            type="number"
            name="date"
            id= "date"
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Company</label>
          <input
            placeholder="select company"
            type="number"
            name="selectcomp"
            id= "selectcomp"
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Button type="submit">save</Button>
      </Form>
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

export default OfficeForm

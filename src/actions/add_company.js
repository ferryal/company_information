import { ADD_COMPANY } from './types'
import axios from 'axios'

const addCompany = (name) => {
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/company`)
      .then(res => {
        console.log(res.data);
        dispatch(addCompanyAsync(res.data))
    })
    .catch(err => {
      throw (err)
    })
  }
}



const addCompanyAsync = (addCompany) =>  {
  return {
    type: ADD_COMPANY,
    payload: addCompany
  }
}

export default addCompany

import { ADD_COMPANY } from './types'
import axios from 'axios'

addCompany = () => {
  return dispatch => {
    axios.post(`API_URL`)
  }
  .then(res => {
    console.log(res.data);
    dispatch(addCompanyAsync(res.data))
  })
  .catch(err => {
    throw (err)
  })
}

export default addCompany

addCompanyAsync('belumtau') {
  return {
    type: ADD_COMPANY,
    payload:
  }
}

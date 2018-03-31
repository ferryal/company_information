import { GET_COMPANY } from './types'
import axios from 'axios'


export default function getCompantList(name){
  return dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}/company`)
      .then(res=> {
        console.log(res.data);
        dispatch(getCompanyListAsync(res.data))
      })
      .catch( err => {
        throw (err)
      })
  }
}


function getCompanyListAsync (company){
  return {
    type: GET_COMPANY,
    payload: company
  }
}

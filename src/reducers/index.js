import { combineReducers } from 'redux'
import CompanyReducer from './CompanyListReducer'
import OfficeReducer from './OfficeListReducer'

const combineReducer = combineReducers({
  company: CompanyReducer,
  // addCompany: addCompanyReducer,
  office:OfficeReducer
})


export default combineReducer;

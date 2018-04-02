import { ADD_COMPANY } from '../actions/types'


export default function(state=[], action) {
  switch (action.type) {
    case ADD_COMPANY:
        return [
          ...state,
          Object.assign({}, action.payload)
        ]
      default:
      return state

  }
}

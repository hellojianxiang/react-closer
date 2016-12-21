const initialState = {
  title: 'Please click the button.'
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'HOME_SET_STATE':
      return {
        state,
        ...action
      }
      break;
    default:
      return state
  }
}

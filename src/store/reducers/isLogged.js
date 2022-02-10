const initialState = false;
const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;

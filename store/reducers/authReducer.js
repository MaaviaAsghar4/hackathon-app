const userInfo = {
  user: [],
};

export default (state = userInfo, action) => {
  switch (action.type) {
    case 'SignIn':
      const {user} = state;
      user.length = 0;
      user.push(action.payload);
      const newState = {user};
      return newState;
    case 'Logout':
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};

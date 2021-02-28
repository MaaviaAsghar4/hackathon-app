import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
export const signInAuth = (email, password) => {
  try {
    return async (dispatch) => {
      const result = await auth().signInWithEmailAndPassword(email, password);
      dispatch({type: 'SignIn', payload: result.user});
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const signUpAuth = (email, password) => {
  try {
    return async (dispatch) => {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      dispatch({type: 'SignIn', payload: result.user});
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => {
  try {
    return async (dispatch) => {
      const result = await auth().signOut();
      dispatch({type: 'Logout'});
    };
  } catch (error) {
    console.log(error.message);
  }
};

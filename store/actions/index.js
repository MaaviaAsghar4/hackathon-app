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

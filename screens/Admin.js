import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {signInAuth} from '../store/actions/index';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Admin = ({navigation, SignInAuth}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = async () => {
    try {
      if (email !== 'abc@abc.com') {
        setError('Invalid Admin Credentials');
      } else {
        setError('');
        await AsyncStorage.setItem('email', email);
        await SignInAuth(email, password);
        console.log(email, password);
        navigation.replace('AdminDetails');
      }
    } catch (error) {
      setError('Failed to Login');
    }
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome To Campus Portal</Text>
        <Text style={styles.subText}>Use Admin Credentials to Login</Text>
      </View>
      <View style={styles.formContainer}>
        {error ? <Text style={styles.error}>{error}</Text> : <Text></Text>}
        <TextInput
          style={styles.input}
          value={email}
          keyboardType={'email-address'}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter Your Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="Enter Your Password"
        />
        <TouchableOpacity style={styles.btnContainer} onPress={handleSignin}>
          <Text style={styles.postBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  SignInAuth: (email, password) => dispatch(signInAuth(email, password)),
});

export default connect(null, mapDispatchToProps)(Admin);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#efefef',
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
    padding: 5,
    color: 'black',
  },
  subText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'blue',
    padding: 5,
  },
  statusContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#4fc3f7',
    color: 'black',
    padding: 10,
    margin: 3,
  },
  input: {
    borderRadius: 3,
    borderColor: 'lightblue',
    borderWidth: 1,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  formContainer: {
    padding: 10,
  },
  postBtn: {
    backgroundColor: '#4fc3f7',
    borderRadius: 3,
    color: '#f7f7f7',
    padding: 8,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 10,
  },
  btnContainers: {
    marginTop: 5,
  },
});

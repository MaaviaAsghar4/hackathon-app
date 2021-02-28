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

const Login = ({navigation, SignInAuth}) => {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  const [error, setError] = useState('');

  const showStudentForm = () => {
    setStatus('Student');
    setShowForm(true);
  };

  const showCompanyForm = () => {
    setStatus('Company');
    setShowForm(true);
  };

  const handleStudentSignin = async () => {
    try {
      if (studentEmail !== 'abc@abc.com') {
        setError('');
        await SignInAuth(studentEmail, studentPassword);
        navigation.replace('JobRequests');
      } else {
        setError('Email belongs to admin');
      }
    } catch (error) {
      setError('Failed to Login');
    }
  };

  const handleEmployeeSignin = async () => {
    try {
      if (companyEmail !== 'abc@abc.com') {
        setError('');
        await SignInAuth(companyEmail, employeePassword);
        navigation.replace('StudentList');
      } else {
        setError('Email belongs to admin');
      }
    } catch (error) {
      setError('Failed to Login');
    }
  };

  const navigateToLogin = () => {
    navigation.replace('Signup');
  };

  const adminLogin = () => {
    navigation.replace('Admin');
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome To Campus Portal</Text>
        <Text style={styles.subText}>Login to Portal</Text>
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.btn} onPress={showStudentForm}>
            <Text>Login as Student</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={showCompanyForm}>
            <Text>Login as Company</Text>
          </TouchableOpacity>
        </View>
        {showForm ? (
          status === 'Student' ? (
            <View style={styles.formContainer}>
              {error ? (
                <Text style={styles.error}>{error}</Text>
              ) : (
                <Text></Text>
              )}
              <TextInput
                style={styles.input}
                value={studentEmail}
                keyboardType={'email-address'}
                onChangeText={(text) => setStudentEmail(text)}
                placeholder="Enter Your Email"
              />
              <TextInput
                style={styles.input}
                value={studentPassword}
                onChangeText={(text) => setStudentPassword(text)}
                secureTextEntry={true}
                placeholder="Enter Your Password"
              />
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={handleStudentSignin}>
                <Text style={styles.postBtn}>Login</Text>
              </TouchableOpacity>
              <Text>Don't Have an Account?</Text>
              <TouchableOpacity
                style={styles.btnContainers}
                onPress={navigateToLogin}>
                <Text style={styles.postBtn}>Sign Up Here</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnContainers}
                onPress={adminLogin}>
                <Text style={styles.postBtn}>Admin Login</Text>
              </TouchableOpacity>
            </View>
          ) : status === 'Company' ? (
            <View style={styles.formContainer}>
              {error ? (
                <Text style={styles.error}>{error}</Text>
              ) : (
                <Text></Text>
              )}
              <TextInput
                style={styles.input}
                value={companyEmail}
                keyboardType={'email-address'}
                onChangeText={(text) => setCompanyEmail(text)}
                placeholder="Enter Your or Company Email"
              />
              <TextInput
                style={styles.input}
                value={employeePassword}
                onChangeText={(text) => setEmployeePassword(text)}
                secureTextEntry={true}
                placeholder="Enter Your Password"
              />
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={handleEmployeeSignin}>
                <Text style={styles.postBtn}>Login</Text>
              </TouchableOpacity>
              <Text>Don't Have an Account?</Text>
              <TouchableOpacity
                style={styles.btnContainers}
                onPress={navigateToLogin}>
                <Text style={styles.postBtn}>Sign Up Here</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnContainers}
                onPress={adminLogin}>
                <Text style={styles.postBtn}>Admin Login</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text></Text>
          )
        ) : (
          <Text></Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#efefef',
  },
  container: {
    flex: 1,
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

const mapDispatchToProps = (dispatch) => ({
  SignInAuth: (email, password) => dispatch(signInAuth(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);

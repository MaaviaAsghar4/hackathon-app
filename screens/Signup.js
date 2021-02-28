import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {signUpAuth} from '../store/actions/index';
import {connect} from 'react-redux';
import database from '@react-native-firebase/database';

const Signup = ({navigation, SignUpAuth}) => {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('');
  const [studentName, setStudentName] = useState('');
  const [university, setUniversity] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [employeeDesignation, setemployeeDesignation] = useState('');
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
      setError('');
      await SignUpAuth(studentEmail, studentPassword);
      database().ref('/Students').push({
        studentName,
        studentEmail,
        university,
        studentPassword,
      });
      console.log(studentName, studentEmail, university, studentPassword);
      navigation.replace('StudentForm');
      setStudentName('');
      setUniversity('');
      setStudentEmail('');
      setStudentPassword('');
    } catch (error) {
      setError('Failed To Sign Up');
    }
  };

  const handleEmployeeSignin = async () => {
    try {
      setError('');
      console.log(
        employeeName,
        companyName,
        employeeDesignation,
        companyEmail,
        employeePassword,
      );
      await SignUpAuth(companyEmail, employeePassword);
      database().ref('/Company').push({
        employeeName,
        companyName,
        employeeDesignation,
        companyEmail,
        employeePassword,
      });
      setEmployeeName('');
      setCompanyEmail('');
      setCompanyName('');
      setemployeeDesignation('');
      setEmployeePassword('');
      navigation.replace('CompanyForm');
    } catch (error) {
      setError('Failed To Sign Up');
    }
  };

  const navigateToLogin = () => {
    navigation.replace('Login');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome To Campus Portal</Text>
        <Text style={styles.subText}>
          Register By Signing Up as one of the following
        </Text>
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.btn} onPress={showStudentForm}>
            <Text>Sign Up as Student</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={showCompanyForm}>
            <Text>Sign Up as Company</Text>
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
                value={studentName}
                onChangeText={(text) => setStudentName(text)}
                placeholder="Enter Your Full Name"
              />
              <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                value={university}
                onChangeText={(text) => setUniversity(text)}
                placeholder="Enter Your University Name"
              />
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
                <Text style={styles.postBtn}>Sign Up</Text>
              </TouchableOpacity>
              <Text>Already Have an Account?</Text>
              <TouchableOpacity
                style={styles.btnContainers}
                onPress={navigateToLogin}>
                <Text style={styles.postBtn}>Sign In Here</Text>
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
                value={employeeName}
                onChangeText={(text) => setEmployeeName(text)}
                placeholder="Enter Your Full Name"
              />
              <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                value={companyName}
                onChangeText={(text) => setCompanyName(text)}
                placeholder="Enter Your Company Name"
              />
              <TextInput
                style={styles.input}
                value={employeeDesignation}
                onChangeText={(text) => setemployeeDesignation(text)}
                placeholder="Enter Your Designation"
              />
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
                <Text style={styles.postBtn}>Sign Up</Text>
              </TouchableOpacity>
              <Text>Already Have an Account?</Text>
              <TouchableOpacity
                style={styles.btnContainers}
                onPress={navigateToLogin}>
                <Text style={styles.postBtn}>Sign In Here</Text>
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
  error: {
    textAlign: 'center',
  },
});

const mapDispatchToProps = (dispatch) => ({
  SignUpAuth: (email, password) => dispatch(signUpAuth(email, password)),
});

export default connect(null, mapDispatchToProps)(Signup);

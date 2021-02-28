import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentForm = ({navigation}) => {
  const [studentName, setStudentName] = useState('');
  const [university, setUniversity] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentOverview, setStudentOverview] = useState('');
  const [studentGrade, setStudentGrade] = useState('');
  const [studentSemester, setStudentSemester] = useState('');

  const postInfo = async () => {
    console.log(studentName);
    await AsyncStorage.setItem('studentEmail', studentEmail);
    await AsyncStorage.setItem('studentName', studentName);
    await AsyncStorage.setItem('studentGrade', studentGrade);
    await AsyncStorage.setItem('studentOverview', studentOverview);
    await AsyncStorage.setItem('studentSemester', studentSemester);
    await AsyncStorage.setItem('university', university);
    database().ref('/StudentInfo').push({
      studentName,
      university,
      studentEmail,
      studentOverview,
      studentGrade,
      studentSemester,
    });
    navigation.replace('JobRequests');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome To Campus Portal</Text>
        <Text style={styles.subText}>Tell Us A Bit About Yourself</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={studentName}
          onChangeText={(text) => setStudentName(text)}
          placeholder="Enter Your Name"
        />
        <TextInput
          style={styles.input}
          keyboardType={'email-address'}
          value={studentEmail}
          onChangeText={(text) => setStudentEmail(text)}
          placeholder="Enter Your Student Email"
        />
        <TextInput
          style={styles.input}
          value={university}
          onChangeText={(text) => setUniversity(text)}
          placeholder="Enter Your University Name"
        />
        <TextInput
          style={styles.input}
          value={studentGrade}
          onChangeText={(text) => setStudentGrade(text)}
          placeholder="Enter Your Grade"
        />
        <TextInput
          style={styles.input}
          value={studentSemester}
          onChangeText={(text) => setStudentSemester(text)}
          placeholder="Enter Your Semester"
        />
        <TextInput
          style={styles.input}
          value={studentOverview}
          onChangeText={(text) => setStudentOverview(text)}
          placeholder="Give A Brief Description of Yourself (e.g. Like What Work You Do?)"
        />
        <TouchableOpacity style={styles.btnContainer} onPress={postInfo}>
          <Text style={styles.postBtn}>Post Your Info</Text>
        </TouchableOpacity>
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

export default StudentForm;

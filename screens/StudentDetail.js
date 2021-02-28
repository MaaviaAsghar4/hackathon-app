import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import StudentHeader from '../components/StudentHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../store/actions/index';
import {connect} from 'react-redux';

const StudentDetail = ({logout, navigation}) => {
  const [studentName, setStudentName] = useState('');
  const [university, setUniversity] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentOverview, setStudentOverview] = useState('');
  const [studentGrade, setStudentGrade] = useState('');
  const [studentSemester, setStudentSemester] = useState('');

  const handleLogout = async () => {
    console.log('object');
    logout();
  };
  const routeChange = (route) => {
    navigation.navigate(route);
  };
  useEffect(() => {
    const asyncFunction = async () => {
      setStudentName(await AsyncStorage.getItem('studentName'));
      setStudentEmail(await AsyncStorage.getItem('studentEmail'));
      setUniversity(await AsyncStorage.getItem('university'));
      setStudentOverview(await AsyncStorage.getItem('studentOverview'));
      setStudentGrade(await AsyncStorage.getItem('studentGrade'));
      setStudentSemester(await AsyncStorage.getItem('studentSemester'));
    };

    asyncFunction();
  }, []);
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <StudentHeader routeChange={routeChange} />
      </View>
      <View>
        <Text style={styles.companyInfo}>Student Information</Text>
      </View>
      <View style={styles.studentContainer}>
        <Text style={styles.stdName}>Student Name: {studentName}</Text>
        <Text style={styles.stdName}>University Name: {university}</Text>
        <Text style={styles.stdName}>Student Grade: {studentGrade}</Text>
        <Text style={styles.stdName}>Student Semester: {studentSemester}</Text>
        <Text style={styles.stdName}>Student Email: {studentEmail}</Text>
        <Text style={styles.stdName}>Description: {studentOverview}</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={handleLogout}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  studentContainer: {
    backgroundColor: '#f7f7f7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 10,
    margin: 15,
  },
  stdName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  about: {
    fontSize: 13,
  },
  btnContainer: {
    marginTop: 10,
    backgroundColor: '#4fc3f7',
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  stdList: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  companyInfo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(StudentDetail);

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../store/actions/index';
import {connect} from 'react-redux';

const CompanyDetails = ({navigation, logout}) => {
  const [employeeName, setEmployeeName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [employeeDesignation, setemployeeDesignation] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyOverview, setCompanyOverview] = useState('');

  const routeChange = (route) => {
    navigation.navigate(route);
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const asyncFunction = async () => {
      setEmployeeName(await AsyncStorage.getItem('employeeName'));
      setCompanyName(await AsyncStorage.getItem('companyName'));
      setemployeeDesignation(await AsyncStorage.getItem('employeeDesignation'));
      setCompanyEmail(await AsyncStorage.getItem('companyEmail'));
      setCompanyOverview(await AsyncStorage.getItem('companyOverview'));
    };

    asyncFunction();
  }, []);
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Header routeChange={routeChange} />
      </View>
      <View>
        <Text style={styles.companyInfo}>Company Information</Text>
      </View>
      <View style={styles.studentContainer}>
        <Text style={styles.stdName}>Company Name: {companyName}</Text>
        <Text style={styles.stdName}>Employee Name: {employeeName}</Text>
        <Text style={styles.stdName}>
          Employee Designation: {employeeDesignation}
        </Text>
        <Text style={styles.stdName}>Company Email: {companyEmail}</Text>
        <Text style={styles.stdName}>Description: {companyOverview}</Text>
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

export default connect(null, mapDispatchToProps)(CompanyDetails);

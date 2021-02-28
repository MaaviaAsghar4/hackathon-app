import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';

const CompanyCard = ({
  companyName,
  employeeName,
  employeeDesignation,
  companyOverview,
  companyEmail,
}) => {
  const [email, setEmail] = useState('');
  let [studentData, setStudentData] = useState([]);
  const blockUser = () => {
    const newValue = {
      companyEmail: studentData.companyEmail,
      companyName: studentData.companyName,
      employeePassword: studentData.employeePassword,
      employeeName: studentData.employeeName,
      employeePassword: studentData.employeePassword,
      blocked: true,
    };
    database()
      .ref('/Company')
      .orderByChild('companyEmail')
      .equalTo(`${companyEmail}`)
      .once('value')
      .then((res) =>
        res.forEach((record) => {
          record.ref.update(newValue);
          // console.log(record.key);
          // console.log(record);

          // setStudentData(record.filter((e) => e.studentEmail === stdEmail));
        }),
      );
    alert('Company Blocked');
  };
  useEffect(() => {
    database()
      .ref('/Company')
      .on('value', (result) => {
        studentData = [];
        result.forEach((childResults) => {
          studentData.push(childResults.val());
        });
        setStudentData(studentData);
      });
    const asyncFunction = async () => {
      const emailAdmin = await AsyncStorage.getItem('email');
      setEmail(emailAdmin);
    };

    asyncFunction();
  }, []);
  return (
    <View style={styles.studentContainer}>
      <Text style={styles.stdName}>Company Name: {companyName}</Text>
      <Text style={styles.stdName}>Employee Name: {employeeName}</Text>
      <Text style={styles.stdName}>
        Employee Designation: {employeeDesignation}
      </Text>
      <Text style={styles.stdName}>About Company:</Text>
      <Text style={styles.about}>{companyOverview}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          Linking.openURL(`mailto:${companyEmail}`);
        }}>
        <Text style={styles.btnText}>Contact Via Email</Text>
      </TouchableOpacity>
      {email === 'abc@abc.com' ? (
        <TouchableOpacity style={styles.btnContainer} onPress={blockUser}>
          <Text style={styles.btnText}>Block Company</Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </View>
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
});

export default CompanyCard;

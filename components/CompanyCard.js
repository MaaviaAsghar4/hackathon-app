import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';

const CompanyCard = ({
  companyName,
  employeeName,
  employeeDesignation,
  companyOverview,
  companyEmail,
}) => {
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

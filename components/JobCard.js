import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';

const StudentCard = ({
  companyName,
  activePosition,
  positions,
  jobOverview,
  companyEmail,
}) => {
  return (
    <View style={styles.studentContainer}>
      <Text style={styles.stdName}>Company Name: {companyName}</Text>
      <Text style={styles.stdName}>Active Position: {activePosition}</Text>
      <Text style={styles.stdName}>No of Positions: {positions}</Text>
      <Text style={styles.stdName}>About Job:</Text>
      <Text style={styles.about}>{jobOverview}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          Linking.openURL(`mailto:${companyEmail}`);
        }}>
        <Text style={styles.btnText}>Apply</Text>
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

export default StudentCard;

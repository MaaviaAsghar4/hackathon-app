import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';

const StudentCard = ({
  stdName,
  stdInstitute,
  stdSemester,
  stdGrade,
  stdOverview,
  stdEmail,
}) => {
  return (
    <View style={styles.studentContainer}>
      <Text style={styles.stdName}>Student Name: {stdName}</Text>
      <Text style={styles.stdName}>Student Institution: {stdInstitute}</Text>
      <Text style={styles.stdName}>Student Semester: {stdSemester}</Text>
      <Text style={styles.stdName}>Student Grade: {stdGrade}</Text>
      <Text style={styles.stdName}>About Student:</Text>
      <Text style={styles.about}>{stdOverview}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          Linking.openURL(`mailto:${stdEmail}`);
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

export default StudentCard;

import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import StudentCard from '../components/StudentCard';
import Header from '../components/Header';

const StudentList = ({navigation}) => {
  const routeChange = (route) => {
    navigation.navigate(route);
  };
  return (
    <ScrollView>
      <View>
        <Header routeChange={routeChange} />
        <View>
          <Text style={styles.stdList}>Active Students</Text>
        </View>
        <View>
          <StudentCard
            stdName={'abc'}
            stdInstitute={'abc'}
            stdSemester={'abc'}
            stdGrade="abc"
            stdOverview={'abc'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stdList: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default StudentList;

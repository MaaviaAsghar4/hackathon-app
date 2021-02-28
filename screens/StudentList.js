import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import StudentCard from '../components/StudentCard';
import Header from '../components/Header';
import database from '@react-native-firebase/database';

const StudentList = ({navigation}) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/StudentInfo')
      .on('value', (result) => {
        data = [];
        result.forEach((childResults) => {
          data.push(childResults.val());
        });
        setData(data);
      });
  }, []);

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
          {data ? (
            data.map((std, i) => {
              return (
                <StudentCard
                  key={i}
                  stdName={std.studentName}
                  stdInstitute={std.university}
                  stdSemester={std.studentSemester}
                  stdGrade={std.studentGrade}
                  stdOverview={std.studentOverview}
                  stdEmail={std.studentEmail}
                />
              );
            })
          ) : (
            <Text>No Student Yet</Text>
          )}
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

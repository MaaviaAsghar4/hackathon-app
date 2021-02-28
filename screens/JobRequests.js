import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import StudentHeader from '../components/StudentHeader';
import JobCard from '../components/JobCard';
import database from '@react-native-firebase/database';

const JobRequests = ({navigation}) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/Jobs')
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
        <StudentHeader routeChange={routeChange} />
        <View>
          <Text style={styles.stdList}>Active Jobs</Text>
        </View>
        <View>
          {data ? (
            data.map((emp, i) => {
              return (
                <JobCard
                  key={i}
                  companyName={emp.companyName}
                  activePosition={emp.activePosition}
                  positions={emp.positions}
                  jobOverview={emp.jobOverview}
                  companyEmail={emp.companyEmail}
                />
              );
            })
          ) : (
            <Text>No Jobs Yet</Text>
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

export default JobRequests;

import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import StudentHeader from '../components/StudentHeader';
import JobCard from '../components/JobCard';

const JobRequests = ({navigation}) => {
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
          <JobCard
            companyName={'abc'}
            activePosition={'abbc'}
            positions={'abbc'}
            jobOverview={'abbc'}
            companyEmail={'abbc'}
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

export default JobRequests;

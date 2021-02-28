import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import CompanyCard from '../components/CompanyCard';
import AdminHeader from '../components/AdminHeader';

const StudentList = ({navigation}) => {
  const routeChange = (route) => {
    navigation.navigate(route);
  };
  return (
    <ScrollView>
      <View>
        <AdminHeader routeChange={routeChange} />
        <View>
          <Text style={styles.stdList}>Active Companies</Text>
        </View>
        <View>
          <CompanyCard
            companyName={'abc'}
            employeeName={'abc'}
            employeeDesignation={'abc'}
            companyOverview={'abc'}
            companyEmail={'abc'}
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

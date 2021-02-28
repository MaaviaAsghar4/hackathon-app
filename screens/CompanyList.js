import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import CompanyCard from '../components/CompanyCard';
import AdminHeader from '../components/AdminHeader';
import database from '@react-native-firebase/database';

const StudentList = ({navigation}) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/CompanyInfo')
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
        <AdminHeader routeChange={routeChange} />
        <View>
          <Text style={styles.stdList}>Active Companies</Text>
        </View>
        <View>
          {data ? (
            data.map((cmp, i) => {
              return (
                <CompanyCard
                  key={i}
                  companyName={cmp.companyName}
                  employeeName={cmp.employeeName}
                  employeeDesignation={cmp.employeeDesignation}
                  companyOverview={cmp.companyOverview}
                  companyEmail={cmp.companyEmail}
                />
              );
            })
          ) : (
            <Text>No Companies Yet</Text>
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

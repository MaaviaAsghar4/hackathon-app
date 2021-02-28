import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AdminHeader from '../components/AdminHeader';

const AdminDetails = ({navigation}) => {
  const routeChange = (route) => {
    navigation.navigate(route);
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <AdminHeader routeChange={routeChange} />
      </View>
      <View>
        <Text style={styles.companyInfo}>Dashboard</Text>
      </View>
      <View style={styles.studentContainer}>
        <Text style={styles.stdName}>Admin Email: {'stdName'}</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  companyInfo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdminDetails;

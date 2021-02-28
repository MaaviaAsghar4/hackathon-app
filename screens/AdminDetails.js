import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AdminHeader from '../components/AdminHeader';
import {logout} from '../store/actions/index';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminDetails = ({logout, navigation}) => {
  const routeChange = (route) => {
    navigation.navigate(route);
  };
  const handleLogout = async () => {
    console.log('object');
    await AsyncStorage.removeItem('email');
    logout();
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
        <Text style={styles.stdName}>Admin Email: abc@abc.com</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={handleLogout}>
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

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(AdminDetails);

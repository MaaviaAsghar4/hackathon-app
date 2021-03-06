import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentHeader = ({routeChange}) => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    const asyncFunction = async () => {
      setEmail(await AsyncStorage.getItem('email'));
    };

    asyncFunction();
  }, []);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>ABC College</Text>
      </View>
      {email !== 'abc@abc.com' ? (
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => routeChange('JobRequests')}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => routeChange('StudentDetail')}>
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4fc3f7',
    padding: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  tabs: {
    backgroundColor: '#4fc3f7',
    padding: 10,
    borderRadius: 3,
    marginLeft: 10,
    shadowColor: '#4fc3f7',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default StudentHeader;

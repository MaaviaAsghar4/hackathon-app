import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const StudentHeader = ({routeChange}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>ABC College</Text>
      </View>
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

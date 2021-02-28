import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CompanyForm = ({navigation}) => {
  const [employeeName, setEmployeeName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [employeeDesignation, setemployeeDesignation] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyOverview, setCompanyOverview] = useState('');

  const postInfo = () => {
    console.log(employeeName);
    navigation.replace('StudentList');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome To Campus Portal</Text>
        <Text style={styles.subText}>Tell Us A Bit About Yourself</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
          placeholder="Enter Your Company Name"
        />
        <TextInput
          style={styles.input}
          keyboardType={'email-address'}
          value={companyEmail}
          onChangeText={(text) => setCompanyEmail(text)}
          placeholder="Enter Your Company Email"
        />
        <TextInput
          style={styles.input}
          value={employeeName}
          onChangeText={(text) => setEmployeeName(text)}
          placeholder="Enter Your Company Description (e.g. Like What Work You Do?)"
        />
        <TextInput
          style={styles.input}
          value={employeeDesignation}
          onChangeText={(text) => setemployeeDesignation(text)}
          placeholder="Enter Your Designation"
        />
        <TextInput
          style={styles.input}
          value={companyOverview}
          onChangeText={(text) => setCompanyOverview(text)}
          placeholder="Enter Your Company Description (e.g. Like What Work You Do?)"
        />
        <TouchableOpacity style={styles.btnContainer} onPress={postInfo}>
          <Text style={styles.postBtn}>Post Your Info</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#efefef',
  },
  container: {
    flex: 1,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
    padding: 5,
    color: 'black',
  },
  subText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'blue',
    padding: 5,
  },
  statusContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#4fc3f7',
    color: 'black',
    padding: 10,
    margin: 3,
  },
  input: {
    borderRadius: 3,
    borderColor: 'lightblue',
    borderWidth: 1,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  formContainer: {
    padding: 10,
  },
  postBtn: {
    backgroundColor: '#4fc3f7',
    borderRadius: 3,
    color: '#f7f7f7',
    padding: 8,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 10,
  },
  btnContainers: {
    marginTop: 5,
  },
});

export default CompanyForm;

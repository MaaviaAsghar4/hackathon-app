import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

const PostJob = ({navigation}) => {
  const [activePosition, setActivePosition] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [positions, setPositions] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');

  const postJob = () => {
    console.log(companyName, activePositions, positions, companyEmail);
  };

  const routeChange = (route) => {
    navigation.navigate(route);
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <Header routeChange={routeChange} />
        <Text style={styles.mainText}>
          Post Jobs to Hire Suitable Candidate
        </Text>
        <Text style={styles.subText}>
          You can post job by filling the form here
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            value={activePosition}
            onChangeText={(text) => setActivePosition(text)}
            placeholder="Enter Job Designation"
          />
          <TextInput
            style={styles.input}
            value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            placeholder="Enter Your Company Name"
          />
          <TextInput
            style={styles.input}
            value={companyEmail}
            keyboardType={'email-address'}
            onChangeText={(text) => setCompanyEmail(text)}
            placeholder="Enter Your Email"
          />
          <TextInput
            style={styles.input}
            value={positions}
            onChangeText={(text) => setPositions(text)}
            secureTextEntry={true}
            placeholder="Enter No Of Positions"
          />
          <TouchableOpacity style={styles.btnContainer} onPress={postJob}>
            <Text style={styles.postBtn}>Post Job</Text>
          </TouchableOpacity>
        </View>
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

export default PostJob;

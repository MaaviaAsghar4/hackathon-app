import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Signup from './screens/Signup';
import Login from './screens/Login';
import PostJob from './screens/PostJob';
import StudentDetail from './screens/StudentDetail';
import StudentForm from './screens/StudentForm';
import StudentList from './screens/StudentList';
import JobRequests from './screens/JobRequests';
import CompanyForm from './screens/CompanyForm';
import CompanyDetails from './screens/CompanyDetails';
import Admin from './screens/Admin';
import AdminDetails from './screens/AdminDetails';
import CompanyList from './screens/CompanyList';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="StudentDetail" component={StudentDetail} />
          <Stack.Screen name="StudentForm" component={StudentForm} />
          <Stack.Screen name="JobRequests" component={JobRequests} />
          <Stack.Screen name="StudentList" component={StudentList} />
          <Stack.Screen name="PostJob" component={PostJob} />
          <Stack.Screen name="CompanyForm" component={CompanyForm} />
          <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
          <Stack.Screen name="AdminDetails" component={AdminDetails} />
          <Stack.Screen name="CompanyList" component={CompanyList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

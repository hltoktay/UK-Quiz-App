import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
  Quiz, 
  Quiz2, 
  Quiz3, 
  Quiz4, 
  Quiz5,
  Quiz6,
  Quiz7,
  Quiz8,
  Quiz9,
  Quiz10,
  Quiz11,
  Quiz12,
  Quiz13,
  Quiz14,
  Quiz15,
  Quiz16
   } from './assets/screens';


import { Home } from './assets/screens';
import { Categories } from './assets/screens';
import { ExamView } from './assets/screens';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Life in the UK" component={Home} />
          <Stack.Screen name="Quiz" component={Quiz} options={{
            title: "EXAM 1"
          }} />
          <Stack.Screen name="Quiz2" component={Quiz2} options={{
            title: "EXAM 2"
          }} />

          <Stack.Screen name="Quiz3" component={Quiz3} options={{
            title: "EXAM 3"
          }} />

           <Stack.Screen name="Quiz4" component={Quiz4} options={{
            title: "EXAM 4"
          }} />

           <Stack.Screen name="Quiz5" component={Quiz5} options={{
            title: "EXAM 5"
          }} />

           <Stack.Screen name="Quiz6" component={Quiz6} options={{
            title: "EXAM 6"
          }} />

           <Stack.Screen name="Quiz7" component={Quiz7} options={{
            title: "EXAM 7"
          }} />

           <Stack.Screen name="Quiz8" component={Quiz8} options={{
            title: "EXAM 8"
          }} />

           <Stack.Screen name="Quiz9" component={Quiz9} options={{
            title: "EXAM 9"
          }} />

           <Stack.Screen name="Quiz10" component={Quiz10} options={{
            title: "EXAM 10"
          }} />

           <Stack.Screen name="Quiz11" component={Quiz11} options={{
            title: "EXAM 11"
          }} />

           <Stack.Screen name="Quiz12" component={Quiz12} options={{
            title: "EXAM 12"
          }} />

            <Stack.Screen name="Quiz13" component={Quiz13} options={{
            title: "EXAM 13"
          }} />

            <Stack.Screen name="Quiz14" component={Quiz14} options={{
            title: "EXAM 14"
          }} />

            <Stack.Screen name="Quiz15" component={Quiz15} options={{
            title: "EXAM 15"
          }} />

            <Stack.Screen name="Quiz16" component={Quiz16} options={{
            title: "EXAM 16"
          }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({

});



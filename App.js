import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Homepage, RunRoyale, SummaryOfRun } from './src/screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} options={{ title: 'Welcome to Run Royale!', headerBackTitle: 'Back' }} />
        <Stack.Screen name="RunRoyale" component={RunRoyale} />
        <Stack.Screen name="Summary" component={SummaryOfRun} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
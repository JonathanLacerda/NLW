import React from 'react';
import { AppLoading } from 'expo'
import { StyleSheet, StatusBar } from 'react-native';
import Home from './src/pages/Home'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

export default function App() {

	const [fontsLoades] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Ubuntu_700Bold
	})

	if(!fontsLoades){
		return <AppLoading/>
	}

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
			<Home />
		</>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

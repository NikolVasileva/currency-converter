import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Calculator from './components/calculator/Calculator';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './components/footer/Footer';
import { useState } from 'react';

export default function App() {
  const [isSwitch, setIsSwitch] = useState(false);

  const handleSwitch = () => {
      setIsSwitch(state => !state);
  }

  return (

    <SafeAreaProvider>
      <LinearGradient
        colors={['#EAEAFE80', '#DDF6F380']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.container}>

          <Header />
          <Calculator isSwitch={isSwitch} onSwap={handleSwitch}/>
          <Footer baseCurrency={isSwitch ? "EUR" : "BGN"}/>

        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  }
});

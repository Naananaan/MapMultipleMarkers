import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Map from './map';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex: 1 to ensure the Map component takes full screen height
  },
});

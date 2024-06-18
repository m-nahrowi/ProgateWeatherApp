import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WeatherSearch from "./src/components/weatherInfo";
import WeatherInfo from "./src/components/weatherSearch";

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherInfo />
      <WeatherSearch />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

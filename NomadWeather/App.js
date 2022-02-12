import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon"
  },
  city:{
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems:"center",
  },
  cityName:{
    color:"black",
    fontSize:50,
    fontWeight: "500"
  },
  weather:{
    flex: 3,
  },
  day:{
    flex: 1,
    alignItems:"center",
    // backgroundColor: "teal",
  },
  temp:{
    marginTop: 50,
    fontSize: 160,
  },
  desciption:{
    marginTop: -30,
    fontSize: 60,
  },
});

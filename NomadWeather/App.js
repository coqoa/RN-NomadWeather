import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

// const {width:SCREEN_W} = Dimensions.get("window");
const SCREEN = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator="false" pagingEnabled horizontal contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato"
  },
  city:{
    flex: 1,
    // backgroundColor: "salmon",
    justifyContent: "center",
    alignItems:"center",
  },
  cityName:{
    color:"black",
    fontSize:50,
    fontWeight: "500"
  },
  weather:{
  },
  day:{
    width: SCREEN.width,
    alignItems:"center",
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

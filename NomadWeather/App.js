import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

// const {width:SCREEN_W} = Dimensions.get("window");
const SCREEN = Dimensions.get("window");
const API_KEY = "d095054ee945d45256e3eeb87ab9625f";

export default function App() {
  const [city, setCity] = useState("Loading..")
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async() =>{
    const {granted} = await Location.requestForegroundPermissionsAsync();
    // console.log(permission)
    if(!granted){
      setOk(false) //허가받지 못함
    }
    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude}, 
      {useGoogleMaps:false}
    )
    setCity(location[0].city)
    const response = await(fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`));
    const json = await response.json()
    setDays(json.daily)
  }
  useEffect(()=> {
    getWeather();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator="false" pagingEnabled horizontal contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="white" size='large' style={{marginTop:50}}/>
          </View>
        ) : (
          days.map((day, index)=><View key={index} style={styles.day}>
            <Text style={styles.tinyText}>{new Date(day.dt * 1000).toString().substring(0, 10)}</Text>
            <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
            <Text style={styles.desciption}>{day.weather[0].main}</Text>
          </View>)
          
        )}
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
    fontSize: 130,
  },
  desciption:{
    marginTop: 20,
    fontSize: 40,
  },
  tinyText:{
    fontSize: 20,
  },
});

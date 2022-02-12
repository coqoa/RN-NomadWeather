import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

// const {width:SCREEN_W} = Dimensions.get("window");
const SCREEN = Dimensions.get("window");
const API_KEY = "d095054ee945d45256e3eeb87ab9625f";
import { Fontisto } from '@expo/vector-icons';

const icons = {
  "Clouds": "cloudy",
  "Clear": "day-sunny",
  "Atmosphere": "cloudy-gusts",
  "Snow": "snow",
  "Rain": "rains",
  "Drizzle": "rain",
  "Thunderstorm": "lightning",
}

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

    //날씨관련
    const response = await(fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`));
    const json = await response.json()
    setDays(json.daily)
  }
  useEffect(()=> {
    getWeather();
  }, [])


  // ---------------------------------return-------------------------------------

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

            <View style = {{flexDirection:"row", alignItems:"center",width:"100%",  justifyContent:"space-between"}}>
              <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
              <Fontisto name={icons[day.weather[0].main]} size={70} color="white" />
            </View>

            <Text style={styles.desciption}>{day.weather[0].main}</Text>
          </View>)
          
        )}
      </ScrollView>
    </View>

  );
}

// ------------------------------StyleSheet----------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightskyblue"
  },
  city:{
    flex: 1,
    // backgroundColor: "salmon",
    justifyContent: "center",
    alignItems:"center",
  },
  cityName:{
    marginTop: 50,
    color:"white",
    fontSize:50,
    fontWeight: "500"
  },
  weather:{
  },
  day:{
    width: SCREEN.width,
    alignItems:"flex-start",
    paddingHorizontal: 20,
  },
  temp:{
    color:"white",
    // marginTop: 50,
    // marginBottom: 50,
    fontSize: 100,
    fontWeight:"500",
  },
  desciption:{
    color:"white",
    fontSize: 25,
    fontWeight:"500",
  },
  tinyText:{
    marginTop: 100,
    color:"white",
    fontSize: 25,
    fontWeight:"500",
  },
});

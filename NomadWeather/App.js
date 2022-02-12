import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: "row"}}>
      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: "tomato"}}></View>
        <View style={{flex: 1, backgroundColor: "teal"}}></View>
        <View style={{flex: 1, backgroundColor: "orange"}}></View>
      </View>
      <Text>-</Text>
      <View style={{flex: 2}}>
        <View style={{flex: 1, backgroundColor: "tomato"}}></View>
        <View style={{flex: 1, backgroundColor: "teal"}}></View>
        <View style={{flex: 1, backgroundColor: "orange"}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

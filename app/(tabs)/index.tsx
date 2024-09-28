import { StyleSheet, Image, ScrollView, Text, View } from "react-native";

import data from "@/assets/data/Food";
import FoodComponent from "@/components/FoodComponent";
import CustomNavBar from "@/components/CustomNavBar";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CustomNavBar />
      <FoodComponent myProps={data} />
    </View>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

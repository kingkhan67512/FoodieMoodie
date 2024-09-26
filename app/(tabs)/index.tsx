import { StyleSheet, Image, ScrollView, Text, View } from "react-native";

import Food from "@/assets/data/Food";
import FoodComponent from "@/components/FoodComponent";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <FoodComponent food={Food}/>
    </ScrollView>
  );
}

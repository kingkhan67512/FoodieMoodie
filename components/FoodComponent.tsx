import Food from "@/assets/data/Food";
import { View, Text, Image, StyleSheet } from "react-native";

export default function FoodComponent({food}) {
    console.log(food)
  return (
    <View style={styles.container}>
      <Image source={{ uri: food[0].image }} style={styles.image} />
      <Text style={styles.title}>{food[0].title}</Text>
      <Text style={styles.title}>{food[0].price}</Text>

      <Image source={{ uri: food[1].image }} style={styles.image} />
      <Text style={styles.title}>{food[1].title}</Text>
      <Text style={styles.title}>{food[1].price}</Text>

      <Image source={{ uri: food[2].image }} style={styles.image} />
      <Text style={styles.title}>{food[2].title}</Text>
      <Text style={styles.title}>{food[2].price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 2 / 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

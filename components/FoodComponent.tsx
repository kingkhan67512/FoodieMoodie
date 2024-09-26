import Food from "@/assets/data/Food";
import { View, Text, Image, StyleSheet } from "react-native";

export default function FoodComponent({food}) {
    console.log(food)
  return (
    <View style={styles.container}>
    
    <View style={styles.imageContainer}>
        <Image source={{ uri: food[0].image }} style={styles.image} />
    </View>
      <Text style={styles.title}>{food[0].title}</Text>
      <Text style={styles.title}>{food[0].price}</Text>
      
      <View style={styles.imageContainer}>
        <Image source={{ uri: food[1].image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{food[1].title}</Text>
      <Text style={styles.title}>{food[1].price}</Text>

      <View style={styles.imageContainer}>
      <Image source={{ uri: food[2].image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{food[2].title}</Text>
      <Text style={styles.title}>{food[2].price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    imageContainer:{
        width:"100%",
        aspectRatio:2,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        width: 150,    // Ensures the image takes full width of the container
        height: 150,   // Ensure the image takes full height of the container
        resizeMode: "cover", // Makes sure the image fits within the container
    },
    
  container: {
    flexGrow:1,
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

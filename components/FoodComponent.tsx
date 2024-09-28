import Food from "@/assets/data/Food";
import { View, Text, Image, StyleSheet,FlatList, TouchableOpacity } from "react-native";

interface FoodItem{
  id:number
  image:string;
  title:string;
  price:string;
}
interface FoodComponentProps{
  myProps:FoodItem[]
}

const Item = ({item}) => (
  <View style={styles.itemcontainer}>
<Image source={{ uri: item.image }} style={styles.image} />
  <Text style={styles.title}>{item.title}</Text>
  <Text style={styles.title}>{item.price}</Text>
  </View>
);
export default function FoodComponent({myProps}:FoodComponentProps) {
  return (
    
    
  <View style={styles.container}>
     <FlatList
        data={myProps}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id} // Ensure each item has a unique id
        numColumns={2} // Display two columns
        columnWrapperStyle={styles.columnWrapper} // Style to add spacing between columns
        showsVerticalScrollIndicator={false} // Hides scroll bar (optional)
        contentContainerStyle={styles.flatListContent} // Adds padding and margin around FlatList
      />
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    padding:10
  },
  itemcontainer:{
    flex:1,
    margin:10,
    overflow:'hidden',
    borderRadius:30,
    backgroundColor:'#FF6500',
    alignItems:'center'
    
  },
  columnWrapper: {
    justifyContent: "space-between", // Space between columns
  },
    image: {
        width: '100%',    // Ensures the image takes full width of the container
        aspectRatio: 1,   // Ensure the image takes full height of the container
        resizeMode: "cover",
    },
    
 
  title: {
    color:'white',
    fontSize: 18,
    fontWeight: "bold",

  },
  
});

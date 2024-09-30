import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

interface FoodItem {
  id: number;
  image: string;
  title: string;
  price: string;
}
interface FoodComponentProps {
  myProps: FoodItem[];
}

const Item = ({ item }) => (
  <View style={styles.itemContainer}>
    <Link href="/GoToAddToCart">
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </Link>
  </View>
);

export default function FoodComponent({ myProps }: FoodComponentProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={myProps}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FF6500',
    maxWidth: '48%',
    height: '95%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    aspectRatio:1,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#FF6500',
  },
  // Enhanced font styles for the title
  title: {
    color: 'white',
    fontSize: 18, // Increased font size
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica', // Optional custom font
    letterSpacing: 1, // Adds space between letters
    textTransform: 'uppercase', // Makes the text uppercase
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for effect
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  // Enhanced font styles for the price
  price: {
    color: '#FFD700', // Golden color for price
    fontSize: 16, // Slightly increased font size
    fontFamily: 'Helvetica', // Optional custom font
    fontWeight: '600', // Semi-bold for price
    marginTop: 5,
    textAlign: 'center',
    letterSpacing: 0.5, // Slight letter spacing for elegance
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});

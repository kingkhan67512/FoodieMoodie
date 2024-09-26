import { StyleSheet,Image, ScrollView,Text, View  } from 'react-native';

import { } from '@/components/Themed';
import Food from '@/assets/data/Food';
export default function TabOneScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={{uri:Food[0].image}}
      style={styles.image}/>
      <Text style={styles.title} >{Food[0].title}</Text>
      <Text style={styles.title}>{Food[0].price}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image:{
    width:'50%',
    aspectRatio: 2/1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

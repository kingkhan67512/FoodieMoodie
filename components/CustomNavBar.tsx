import { Text,View,StyleSheet, TouchableOpacity} from "react-native";


export default function CustomNavBar(){
return(
    <View style={styles.container}>
        <TouchableOpacity style={[styles.button,styles.Button1]}>
        <View>
            <Text style={styles.buttonText}>Meals</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.Button2]}>
        <View>
            <Text style={styles.buttonText}>Sides</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.Button3]}>
        <View>
            <Text style={styles.buttonText}>Snacks</Text>
        </View>
        </TouchableOpacity>
        
    </View>
)
} 
const styles=StyleSheet.create({
container:{
    height: 60, // Fixing the height of the navbar
    flexDirection:'row',
    justifyContent:'space-evenly'
},
button:{
    backgroundColor:'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 5,
    borderRadius: 50,
    justifyContent:'center'
},
buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
Button1: {
    backgroundColor: '#FF6500',
  },
Button2: {
    backgroundColor: '#007F73',
  },
Button3: {
    backgroundColor: '#793FDF',
  },

})
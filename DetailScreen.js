import * as React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';


function DetailScreen({ navigation, route }) {

  const { user } = route.params;
  const {name, location, email, bio, avatar_url } = user;


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor:'#D3D3D3'}}>
        <Image
         style={{
           width: 120,
           height: 120,
           marginBottom: 60,
           borderWidth: 5,
           borderColor: 'white',
         }}
         source={{ uri:'avatar_url' }}></Image>
        <Text style={styles.textUser} >Nome: { name } </Text>
        <Text style={styles.textUser} >Localização: { location } </Text>
        <Text style={styles.textUser} >Email: { email } </Text>
        <Text style={styles.textUser} >Bio: { bio} </Text>
      </View>
      );
}
    

const styles = StyleSheet.create({
  textUser: {
    fontSize: 26,
    textAlign: 'justify',
   
  }


  
});


  export default DetailScreen;
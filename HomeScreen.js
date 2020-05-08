import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator,Image} from 'react-native';
import axios from 'axios';


function HomeScreen({ navigation } ) {
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState('');

    const url = `https://api.github.com/users/${user}`;
    

    const submit = async() => {
      setLoading(true);
      
      try {
        const response = await axios.get(url);
        navigation.navigate('Detail', { user: response.data });
      } catch (error) {
        alert("Usuario não Existe !!!");
      }

      setLoading(false);
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
           <Image
         style={{
           width: 200,
           height: 200,
           marginBottom: 20,
           borderWidth: 5,
           borderColor: 'white',
           borderRadius:20,
         }}
         source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.pngtree.com%2Ffreepng%2Fusers-vector_3725294.html&psig=AOvVaw0RbThmuscD9RPohsWhMrSc&ust=1588989080601000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjDs-GTo-kCFQAAAAAdAAAAABAQ' }}></Image>
        <Text style={styles.title}>Digite Nome do Usuario:</Text>
        
        <TextInput style={styles.input} value={user} onChangeText={setUser} />
        
        <TouchableOpacity
        disabled={loading}
        style={styles.button} 
        onPress={()=>{
         submit();
        }}
    >
        
      {loading === false && <Text style={styles.textButton}>Buscar</Text> }
      {loading === true && <ActivityIndicator color= 'white' />}
</TouchableOpacity>
      </View>
    );
  }


  const styles = StyleSheet.create({
      title: {
          fontSize: 26,
      },
      input: {
          width: 200,
          height: 40,
          borderRadius: 4,
          textAlign: 'center',
          marginVertical: 10,
          backgroundColor: '#C0C0C0',
      },
      button: {
        width: 100,
        height: 40,
        borderRadius: 4,
        textAlign: 'center',
        marginVertical: 5,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50,
      },
      textButton: {
          color: '#000000',
          fontWeight: 'bold',
          
      }
 });

export default HomeScreen;


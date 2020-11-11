import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Instagram</Text>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: 100,
    height: 100,
    alignSelf:'center',
    marginTop:150
  },
  head:{
    marginTop:0,
    textAlign:'center',
    backgroundColor:'rgb(203, 62, 123)',
    color:'white',
    fontSize:30,
    height:40,
    fontWeight:'bold'
  }
});

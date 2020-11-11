import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Facebook extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Facebook</Text>
        <Image
          style={styles.img}
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEU6VZ////81Up0vTZwyT5xgc61+jbuXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5f29/q3v9iHlcDV2umvt9RoerJxgrbd4Ozp6/PHzeHByN5YbatQZ6h2hrhMY6aQnMSGvE5JAAAC3UlEQVR4nO3cWZKjMBBFUVrIEzZ4nqt6/8usqP5vLJDlfEncuwCCE0ZmkKCqiIiIiIiIiIiIiIiIiIjUCyHG+kXReidHF+u2q2Zf+8Wqt/XeJ7Fuw/l4+ZPSobHe2eHFJi4OSbrfNu6EsT3fknkOhbGbX4f4vAlDdx7ocyasq0HHpz9hNx/u8yQMzX0M0I8wLgePQF/C+rEdB/QirE8jfV6EcTzQhzA+xwNdCEM1dgx6EXZpNxF+he0uB+hAGL+ygA6Ebc4g9CDMPEb1heGRCZQXdumPK3wKwywXqC5sNxMXhpzLNRfC5jh1Ye65UF4Yz/lAbWGTe7aXF7YjH824EYblG4DSwrh/h1B57qkeMgy3h93a3fxhk35Nejs1TeNvDrhLPRten22w3tlRxUTgrvPpq8J3GvDeWe/p2BLvnC5uganCpdNDtEoVHoVPd69KEzr+CdOEl9Z6NzNKEh5r693MKEmofE32siThHKFyCBHqhxChfggR6ocQoX4IEeqHEKF+CBHqNw1h6HlFuUlZWvrVvnrT2Rh4WvS0ThDu+jbw28pWWKcgMrOdffuAcGs7RfwBofH02weE98kfpWvbP9MPCPeTF55s5/k/IPyeunBrfE1TXng1XjFVXrgxXo1SXrgzXjJVXriY/Di0vn8sL3wYL3srL7R+BFBcuLVem1lceLVeulhceJv8b2i+OLO48O/k/2nOkxc+rVeBFxdaD8PiQut7p/JC+3cPSwuNHyV+QLia/Di0f1ehtHBmfbIoLrT2FRdaP0osLzS/dyouFPjYQP2Gr7P0tLM/Sqtq2VPK5yDnfVuwxv0r/L+YtNqk7tmCNe5V01hP0xdChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUQ4oB9urELQFCwKGgAAAABJRU5ErkJggg==',
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
    marginTop:150,
    borderRadius:20
  },
  head:{
    marginTop:0,
    textAlign:'center',
    backgroundColor:'rgb(63, 86, 154)',
    color:'white',
    fontSize:30,
    height:40,
    fontWeight:'bold'
  }
});

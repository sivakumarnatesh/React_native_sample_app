/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SettingsScreen = ({navigation}) => {
  const logOut = () => {
    navigation.navigate('Login');
  };
    return (
      <View style={styles.settings}>
        <TouchableOpacity onPress={() => {logOut()}} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };
export default SettingsScreen;

const styles = StyleSheet.create({
  settings:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
  },
  logoutBtn:{
    backgroundColor:'red',
    borderRadius: 10,
    margin: 12,
    marginTop: 30,
    height: 50,
  },
  logoutText:{
    color:'#FFFFFF',
    textAlign:'center',
    padding:10,
    fontSize:15,
    fontWeight:'bold',
  },
});

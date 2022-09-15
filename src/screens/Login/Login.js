/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { SafeAreaView,TouchableOpacity, StyleSheet, TextInput, Image, View, Text } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { LOGIN_LOGO } from "../../assets/images";
// import {useDispatch } from 'react-redux';
// import { assignValues } from '../../features/credentials';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();
  const userName = (val) => {
  setUsername(val);
  };

  const passWord = (val) => {
  setPassword(val);
  };
  const authenticate = () => {
    // dispatch(assignValues(username,password));
    if (username === 'admin' && password === 'admin'){
      navigation.navigate('Dashboard');
    }
    else {
      alert('Enter valid credentials');
    }
    setUsername('');
    setPassword('');
    };
  return (
    <SafeAreaView style={styles.Credentials}>
      <View style={styles.imageContainer}>
      <Image source={LOGIN_LOGO} style={styles.loginLogo} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(val) => userName(val)}
        value={username}
        placeholder="username"
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => passWord(val)}
        value={password}
        placeholder="password"
        placeholderTextColor="#FFF"
      />
      <TouchableOpacity style={styles.loginBtn} onPress={() => authenticate()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer:{
    width:'100%',
    height:'50%',
  },
  loginLogo:{
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  input: {
    fontSize:15,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
    borderColor:'white',
    color:'white',
  },
  Credentials: {
    backgroundColor:'black',
    width:'100%',
    height:'100%',
  },
  loginBtn: {
    backgroundColor:'red',
    borderRadius: 10,
    margin: 12,
    marginTop: 30,
    height: 50,
  },
  loginText: {
    color:'#FFFFFF',
    textAlign:'center',
    padding:10,
    fontSize:15,
    fontWeight:'bold',
  },
});

export default Login;

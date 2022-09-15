/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from "react";
import {View, StyleSheet,BackHandler,Alert,Image,Text} from 'react-native';
import FlatList from "../../components/Flatlist/FlatList";
// import data from "../../modal/data";
// import Carousel,{Pagination} from 'react-native-snap-carousel';

const HomeScreen = () => {
  // const [activeDotIndex,setActiveDotIndex] = useState(0);
  useEffect(()=>{
    const BackHandling = () => {
      Alert.alert('Exit','Are you want exit ?',[
        {
          text:'cancel',
          onPress:() => null,
        },
        {
          text:'Ok',
          onPress:() => BackHandler.exitApp(),
        },
      ]);
      return true;
    };
    BackHandler.addEventListener('Go Back',BackHandling);
    return () => BackHandler.removeEventListener('hardwareBackPress', BackHandling);
  },[]);

//   const  RenderItem = ({item}) => {
//     return (
//       <View style={{borderRadius: 5,height: 250,marginLeft: 25,marginRight: 25,}}>
//         <Image style={{width:50,height:30}} source={item.image}/>
//         <Text style={{color:'white'}}>Hellow</Text>
//       </View>
//     );
// };

    return (
      <View style={styles.homeContainer}>
        <FlatList />
        {/* <Carousel
        layout={'default'}
        data={data}
        sliderWidth={500}
        itemWidth={300}
        renderItem={(item)=>RenderItem(item)}
        onSnapToItem={(index) =>( setActiveDotIndex(index)) }
        />
        <Pagination
        dotsLength={5}
        activeDotIndex={activeDotIndex}
        dotStyle={{width: 10, height: 10,borderRadius: 5,marginHorizontal: 8,backgroundColor: 'black'}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        /> */}
      </View>
    );
  };
export default HomeScreen;
const styles = StyleSheet.create({
  homeContainer:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
  }
});

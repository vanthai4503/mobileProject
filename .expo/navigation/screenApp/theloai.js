import React, { useState } from "react";
import { View, Text, StyleSheet ,Image, ScrollView, FlatList} from "react-native";
import { MaterialIcons,FontAwesome,Ionicons ,AntDesign ,Entypo} from '@expo/vector-icons'; 
import color from "../css/color";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const Theloai = () =>{
    const navigation = useNavigation();
    return (
        <SafeAreaView style= {styles.SafeAreaView}>
            <View style= {styles.header}>
                <View style= {styles.header_body}>
                    <Ionicons name="md-search-sharp" size={24} color="white" />
                    <Image source={require('../images/logo2.png')} style={styles.logo_img}/>
                    <AntDesign
                    onPress={()=>navigation.navigate('setting')}
                     name="setting" size={24} color="white" />
                </View>
            </View>

            <View style= {styles.body}>
                <View style= {styles.body_item}>
                    <Image source={require('../images/10.jpg')} style={styles.body_item_img}/>
                    <Text  onPress ={()=>navigation.navigate('TheloaShowScreen',{ genreName: 'K-POP' })} style={styles.body_item_text}>K-POP</Text>
                </View>
                <View style= {styles.body_item}>
                    <Image source={require('../images/8.jpg')} style={styles.body_item_img}/>
                    <Text onPress ={()=>navigation.navigate('TheloaShowScreen',{ genreName: 'V-POP' })} style={styles.body_item_text}>V-POP</Text>
                </View>
                <View style= {styles.body_item}>
                    <Image source={require('../images/2.jpg')} style={styles.body_item_img}/>
                    <Text onPress ={()=>navigation.navigate('TheloaShowScreen',{ genreName: 'US-UK' })} style={styles.body_item_text}>US-UK</Text>
                </View>
                <View style= {styles.body_item}>
                    <Image source={require('../images/evol.jpg')} style={styles.body_item_img}/>
                    <Text onPress ={()=>navigation.navigate('TheloaShowScreen',{ genreName: 'C-POP' })} style={styles.body_item_text}>C-POP</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    //SafeAreaView
    SafeAreaView:{
        backgroundColor:color.backgroundColor,
        height:'100%'
    },

    //header
    header:{
        marginVertical:10
    },
    header_body:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        position: 'relative',
        top:0,
    },
    logo_img:{
        width:75,
        height: 50,
        
    },

    //theloai
    body:{
        marginTop:20,
        with:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    body_item:{
        padding:20,
        width:'40%'
    },
   body_item_img:{
        width: 120,
        height: 220,
        borderRadius:20
    },
   body_item_text:{
        marginTop:10,
        color:'white',
        fontSize:17,
        textAlign:'center',
        marginRight:60
    },
})

export default Theloai;
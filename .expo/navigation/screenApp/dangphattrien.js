import React, { useState } from "react";
import { View, Text, StyleSheet ,Image, ScrollView, FlatList, Touchable, Button} from "react-native";
import { MaterialIcons,FontAwesome,Ionicons ,AntDesign ,Entypo} from '@expo/vector-icons'; 
import color from "../css/color";
import { useNavigation } from "@react-navigation/native";


const Dangphattrien = () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
             <View style={styles.body_item}>
                <Image source={require('../images/dangphatTrien.jpg')} style={styles.body_item_img}/>
             </View> 
             <View style={styles.body_item}>
                <Text style={styles.body_item_header}>TÍNH NĂNG ĐANG PHÁT TRIỂN </Text>
             </View>  
            <View style={styles.button} >
                <Button
                // onPress={()=> navigation.reset({
                //     index: 0,
                //     routes: [{ name: 'HomeScreen' }],
                //   })}
                onPress={()=>navigation.navigate('hometest')}
                title="Quay lại Home"></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body:{
        backgroundColor:color.backgroundColor,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    body_item:{
        paddingBottom:50
    },
    body_item_header:{
        color: 'white',
        fontSize:18
    },
    body_item_img:{
    },
    button:{
        width:'50%',
    }

})

export default Dangphattrien;
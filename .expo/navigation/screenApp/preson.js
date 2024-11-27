import React, { useState } from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import { AntDesign,Ionicons,Octicons,Entypo,FontAwesome5, MaterialIcons,} from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import color from "../css/color";

const Preson = () =>{
    const navigation = useNavigation();

    return(
        <View style= {styles.container}>
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
                <View style= {styles.body_1}>
                    <Image source={require('../images/evol.jpg')} style={styles.body_img}/>
                    <Text style={styles.body_text} >evol4503@gmail.com</Text>
                    <Text style={styles.body_text}>Evol Black Hole</Text>
                </View>
                <View style= {styles.body_2}>
                    <Octicons name="person" size={24} color="white" />
                    <Text style={styles.body_text}>Edit Perfil</Text>
                </View>
                
            </View>

            <View style= {styles.body3}>
                <View style= {styles.body3_row}>
                    <View style= {styles.body3_col}>
                        <View style= {styles.body3_item}>
                            <View style={styles.body3_imgContainer}>
                                <MaterialIcons style= {styles.body3_img} name="cloud-upload" size={24} color="white" />
                            </View>
                            <Text style= {styles.body3_text}>Song Upload</Text>
                        </View>
                    </View>
                    <View style= {styles.body3_col}>
                        <View style= {styles.body3_item}>
                            <View style={styles.body3_imgContainer } backgroundColor="#FF9900">
                                <Ionicons style= {styles.body3_img} name="notifications-circle-outline" size={24} color="white" />    
                            </View>
                            <Text style= {styles.body3_text}>Notification</Text>
                        </View>
                    </View>
                </View>
                
                <View style= {styles.body3_row}>
                    <View style= {styles.body3_col}>
                        <View style= {styles.body3_item}>
                            <View style={styles.body3_imgContainer} backgroundColor="#8e44ad">
                                <MaterialIcons style= {styles.body3_img} name="favorite-border" size={24} color="white" />
                            </View>
                            <Text style= {styles.body3_text}>Song Favorite</Text>
                        </View>
                    </View>
                    <View style= {styles.body3_col}>
                        <View style= {styles.body3_item}>
                            <View style={styles.body3_imgContainer} backgroundColor="#33CC33">
                                <Ionicons style= {styles.body3_img} name="volume-high" size={24} color="white" />    
                            </View>
                            <Text style= {styles.body3_text}>Audio</Text>
                        </View>
                    </View>
                </View>

                <View style= {styles.body3_row}>
                    <View style= {styles.body3_col}>
                        <View style= {styles.body3_item}>
                            <View style={styles.body3_imgContainer} backgroundColor="#EEA9B8">
                                <MaterialIcons style= {styles.body3_img} name="language" size={24} color="white" />
                            </View>
                            <Text style= {styles.body3_text}>Language</Text>
                        </View>
                    </View>
                    <View style= {styles.body3_col}>
                        <View style= {styles.body3_item}>
                            <View style={styles.body3_imgContainer} backgroundColor="#AFEEEE">
                                <Ionicons style= {styles.body3_img} name="sync-circle" size={24} color="white" />    
                            </View>
                            <Text style= {styles.body3_text}>Sync</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
     //container
     container:{
        backgroundColor:'#121214',
        height:'100%'
    },
    //header
    header:{
        marginVertical:20
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
        borderRadius:25
        
    },
    //body
    body:{
        backgroundColor:'#1A150C',
        height:200,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-around',
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100,
        marginHorizontal:5,
        marginBottom:40
    },
    //body1
    body_1:{
        alignItems: 'center',
        paddingVertical:20,
       
    },
    body_img:{
        width:60,
        height: 60,
        borderRadius:35,
    },
    body_text:{
        color:'white',
        marginVertical:4
    },
    //body2
    body_2:{
        alignItems: 'center',
        paddingVertical:20,
    },
    //body3
    body3:{
        backgroundColor:'#1A150C',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        marginHorizontal:5,


    },
    body3_row:{
        width:'100%',
        flexDirection:'row',
        marginVertical:12,
    },
    body3_col:{
        width:'50%',
    },
    body3_item:{
        flexDirection:'column',
        alignItems: 'center',

    },
    body3_imgContainer:{
        borderRadius:20,
        backgroundColor:'#E33539',
        width:40,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body3_img:{
    },
    body3_text:{
        marginTop:10,
        color:'#fff',
    },
    
})
export default Preson;
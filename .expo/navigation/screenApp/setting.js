import React, { useState } from "react";
import { View, Text, StyleSheet , ScrollView,Switch, useColorScheme} from "react-native";
import { AntDesign,Ionicons,Octicons,Entypo,FontAwesome5, MaterialIcons,} from '@expo/vector-icons'; 
import color from "../css/color";
import { useNavigation } from "@react-navigation/native";

const Setting = () =>{
    const navigation = useNavigation();
    const [isLightMode,setIsLightMode] = useState(true);
   
    const toggleLightMode = () =>{
        setIsLightMode(!isLightMode);
    }
    return(
        <View style= {isLightMode ? styles.darkcontainer:styles.lightMode  }>
            
             <View style= {styles.header}>
                <View style= {styles.header_body}>
                    <AntDesign style= {styles.header_back}
                    name="" size={24} color="white" />
                    <Text style= {styles.header_text}>SETTING</Text>
                    <AntDesign name="" size={24} color="white" />
                 </View>
             </View>
            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <Ionicons  style={isLightMode ? styles.left_icon: styles.left_icon_light}name="moon" size={24} color="black" />
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Dark Mode</Text>
                </View>
                <View style={styles.setting_item_right}>
                    <Switch onValueChange={toggleLightMode} value={isLightMode} />
                </View>
            </View>

            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <AntDesign style={isLightMode ? styles.left_icon: styles.left_icon_light} name="play" size={24} color="black" />
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Music Player</Text>
                </View>
                <View style={styles.setting_item_right}>
                    <MaterialIcons
                    onPress={()=>navigation.navigate('Dangphattrien')}
                    style={isLightMode ? styles.right_icon: styles.left_icon_light} name="arrow-forward-ios" size={24} color="white" />
                </View>
            </View>

            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <AntDesign style={isLightMode ? styles.left_icon: styles.left_icon_light} name="clouddownload" size={24} color="black" />
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Download Music</Text>
                </View>
                <View style={styles.setting_item_right}>
                    <MaterialIcons
                    onPress={()=>navigation.navigate('Dangphattrien')}
                    style={isLightMode ? styles.right_icon: styles.left_icon_light} name="arrow-forward-ios" size={24} color="white" />
                </View>
            </View>
           
            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <Ionicons  style={isLightMode ? styles.left_icon: styles.left_icon_light}name="notifications-circle" size={24} color="black" />
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Notifications</Text>
                </View>
                <View style={styles.setting_item_right}>
                    <MaterialIcons
                    onPress={()=>navigation.navigate('Dangphattrien')}
                    style={isLightMode ? styles.right_icon: styles.left_icon_light} name="arrow-forward-ios" size={24} color="white" />
                </View>
            </View>


            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <Octicons style={isLightMode ? styles.left_icon: styles.left_icon_light} name="question" size={24} color="black" />
                    <View>
                        <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Version Information</Text>
                        <Text style={styles.left_version}>1.0</Text>
                    </View>
                </View>
                
            </View>
            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <FontAwesome5 style={isLightMode ? styles.left_icon: styles.left_icon_light} name="exclamation-triangle" size={24} color="black" />
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Suggestions, Report errors</Text>
                </View>
                <View style={styles.setting_item_right}>
                    <MaterialIcons
                    onPress={()=>navigation.navigate('Dangphattrien')}
                    style={isLightMode ? styles.right_icon: styles.left_icon_light} name="arrow-forward-ios" size={24} color="white" />
                </View>
            </View>
            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                     <AntDesign name="infocirlce" style={isLightMode ? styles.left_icon: styles.left_icon_light}  size={24} color="black" />
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Introduce App</Text>
                </View>
                <View style={styles.setting_item_right}>
                    <MaterialIcons
                    onPress={()=>navigation.navigate('gioithieu')}
                    style={isLightMode ? styles.right_icon: styles.left_icon_light} name="arrow-forward-ios" size={24} color="white" />
                </View>
            </View>
            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <Entypo style={isLightMode ? styles.left_icon: styles.left_icon_light} name="dots-three-horizontal" size={24} color="black" />
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Other</Text>
                </View>
                <View style={styles.setting_item_right}>
                    <MaterialIcons 
                    onPress={()=>navigation.navigate('Dangphattrien')}
                    style={isLightMode ? styles.right_icon: styles.left_icon_light } name="arrow-forward-ios" size={24} color="white" />
                </View>
            </View>
            <View style={isLightMode ? styles.setting_item: styles.setting_item_light}>
                <View style={styles.setting_item_left}>
                    <Entypo style={isLightMode ? styles.left_icon: styles.left_icon_light} name="log-out" size={24} color="black" />   
                    <Text style={isLightMode ?styles.left_name:styles.left_name_light}>Log Out</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    //container
    darkcontainer:{
        backgroundColor:'#121214',
        height:'100%'
    },
    lightMode:{
        backgroundColor:'white',
        height:'100%',
    },
    //header
    header:{
        marginVertical:20,
        
    },
    header_text:{
        color:color.headerColor,
        textAlign:'center',
    },
    header_body:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        position: 'relative',
        top:0,
    },
    
    //setting-item có mũi tên
    setting_item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'#1A150C',
        marginBottom:20,
        padding:20,
        borderRadius:10,
        marginHorizontal:10
    },
    setting_item_left:{
        flexDirection:'row',
        paddingHorizontal:10,
        alignItems:'center'
    },
    left_icon:{
        paddingRight:10,
        color:'white'
    },
    left_name:{
        color:'white'
    },
    left_version:{
        color:color.headerColor
    },
    right_icon:{
        paddingRight:10,
        color:'white'
    },

    //lighmode
    setting_item_light:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'#E8E8E8',
        marginBottom:20,
        padding:20,
        borderRadius:10,
        marginHorizontal:10
    },
    left_icon_light:{
        paddingRight:10,
        color:'black'
    },
    left_name_light:{
        color:'black'
    },

})
export default Setting;
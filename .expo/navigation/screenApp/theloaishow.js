import React, { useState } from "react";
import { View, Text, StyleSheet ,Image, ScrollView, FlatList,TouchableOpacity} from "react-native";
import { MaterialIcons,FontAwesome,Ionicons ,AntDesign ,Entypo} from '@expo/vector-icons'; 
import color from "../css/color";
import { useEffect } from "react";
import axios from 'axios';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation,useRoute  } from "@react-navigation/native";



const TheloaiShow = () =>{
    const route =useRoute();
    const navigation = useNavigation();
    const {genreName} = route.params;
    const[songs,setSongs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://thamlam0011-001-site1.anytempurl.com/api/Song/SearchGeners?tenTL=${genreName}`);
            setSongs(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [genreName]); 

      const renderEachGenresSong = (item) =>(
        <View style= {styles.playlist_song}>
            <View style= {styles.playlist_song_list}>
                <View style= {styles.playlist_song_item}>
                    <View style= {styles.playlist_song_info}>
                        <View style= {styles.playlist_song_img}>
                            <TouchableOpacity onPress={()=>navigation.navigate('music',{ IDSong: item.IDSong,Linkbh:item.Linkbaihat })} >
                                <Image source={{uri:`https://evolshop.click${item.Img}`}} style={styles.playlist_item_img}/>
                            </TouchableOpacity>
                        </View>
                        <View style= {styles.playlist_song_text}>
                            <Text style={styles.playlist_item_name}>{item.Tenbai}</Text>
                            <Text style={styles.playlist_item_siger}>{item.Casi}</Text>
                        </View>
                    </View>

                    <View style= {styles.playlist_song_other}>
                        <Entypo style={styles.left_icon} name="dots-three-horizontal" size={24} color="white" />
                    </View>
                    
                </View>
            </View>
        </View>
    )
    return (
        <SafeAreaView style= {styles.SafeAreaView}>
            <View style= {styles.header}>
                <View style= {styles.header_body}>
                    <Ionicons name="md-search-sharp" size={24} color="white" />
                    <Image source={require('../images/logo2.png')} style={styles.logo_img}/>
                    <AntDesign
                    onPress={()=>navigation.navigate('SettingScreenStack')}
                     name="setting" size={24} color="white" />
                </View>
            </View>
            <View style= {styles.body}>
                <View style= {styles.body_playlist}>
                    <Text style= {styles.mv_header}>{genreName}</Text>
                    <FlatList horizontal={false} data={songs} renderItem={({item}) => renderEachGenresSong(item) }/>
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
        textAlign:'center'
    },
    //playlist
    mv_header:{
        marginVertical:5,
        marginLeft:6,
        color:color.headerColor,
        fontWeight:'bold'
    },
    playlist_song:{
        flexDirection:'row',
        alignItems: 'center',
    },
    playlist_song_list:{
        width:400
    },
    playlist_song_item:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',

        marginBottom:20
    },
    playlist_song_other:{

    },
    playlist_song_info:{
        flexDirection:'row',
        alignItems:'center',
    },
    playlist_item_img:{
        width:50,
        height:50,
        borderRadius:14,
        marginHorizontal:10
    },
    playlist_item_name:{
        color:'white'
    },
    playlist_item_siger:{
        color:'white'

    },
    playlist_song_other:{
        paddingRight:20
    },
})

export default TheloaiShow;
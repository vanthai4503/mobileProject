import React, { useState } from "react";
import { View, Text, StyleSheet ,Image, ScrollView, FlatList,TouchableOpacity } from "react-native";
import { MaterialIcons,FontAwesome,Ionicons ,AntDesign ,Entypo} from '@expo/vector-icons'; 
import color from "../css/color";
import { useEffect } from "react";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";


const Home = () =>{
    const navigation = useNavigation();
    const[songs,setSongs] = useState([]);
    const playSound = async () => {
        
       
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://thamlam0011-001-site1.anytempurl.com/api/Song/ListSong');
            setSongs(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 
      
    const renderEachItemMV = (item) =>(
        <View style= {styles.mv_song}>
        <View style= {styles.mv_song_item}>
            <TouchableOpacity onPress={()=>navigation.navigate('music',{ IDSong: item.IDSong ,Linkbh:item.Linkbaihat})} >
                <Image source={{uri:`https://evolshop.click${item.Img}`}} style={styles.song_item_img}/>
            </TouchableOpacity>
            <Text style={styles.song_item_text}>{item.Tenbai}</Text>
        </View>
        </View>
    )
    const renderEachItemSong = (item) =>(
        <View style= {styles.playlist_song}>
            <View style= {styles.playlist_song_list}>
               
                <View style= {styles.playlist_song_item}>
                    <View style= {styles.playlist_song_info}>
                        <View style= {styles.playlist_song_img}>
                            <TouchableOpacity onPress={()=>navigation.navigate('music',{ IDSong: item.IDSong ,Linkbh:item.Linkbaihat })} >
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
                <View style= {styles.playlist_song_item}>
                    <View style= {styles.playlist_song_info}>
                        <View style= {styles.playlist_song_img}>
                            <TouchableOpacity onPress={()=>navigation.navigate('music',{ IDSong: item.IDSong ,Linkbh:item.Linkbaihat })} >
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
                <View style= {styles.playlist_song_item}>
                    <View style= {styles.playlist_song_info}>
                        <View style= {styles.playlist_song_img}>
                            <TouchableOpacity onPress={()=>navigation.navigate('music',{ IDSong: item.IDSong ,Linkbh:item.Linkbaihat })} >
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
    const renderEachItemSinger = (item) =>(
        <View style= {styles.mv_song}>
            <View style= {styles.mv_song_item}>
                <TouchableOpacity onPress={()=>navigation.navigate('casi',{ Casi: item.Casi })} >
                    <Image source={{uri:`https://evolshop.click${item.Img}`}} style={styles.song_item_img}/>
                </TouchableOpacity>
                <Text style={styles.song_item_text}>{item.Casi}</Text>
            </View>
        </View>
    )
    
    return (
        <ScrollView style={styles.scrollView}>
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
                <View style= {styles.body_mv}>
                    <Text style= {styles.mv_header}>SONG HOT</Text>
                        <FlatList horizontal={true} data={songs} renderItem={({item}) => renderEachItemMV(item) }/>
                </View>
                <View style= {styles.body_playlist}>
                    <Text style= {styles.mv_header}>Playlist hot</Text>
                    <FlatList horizontal={true} data={songs} renderItem={({item}) => renderEachItemSong(item) }/>
                </View>
                <View style= {styles.body_nd}>
                    <Text style= {styles.mv_header}>Ca sĩ</Text>
                    <FlatList horizontal={true} data={songs} renderItem={({item}) => renderEachItemSinger(item) }/>
                </View>
                
            </View>
        </ScrollView>
        )
}
const styles = StyleSheet.create({
    //scrollview
    scrollView:{
        backgroundColor:color.backgroundColor
    },
    scrollViewContent: {
        flexDirection: 'row', 
        // width:'100%'// Đảm bảo các phần tử con được xếp hàng ngang
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
        
    },

    //body
    body:{

    },
    // body-mvhot
    mv_header:{
        marginVertical:5,
        marginLeft:6,
        color:color.headerColor,
        fontWeight:'bold'
    },
    mv_song:{
        flexDirection:'row',
        alignItems: 'center',
        
    },
    mv_song_item:{
        padding:10,
    },
    song_item_img:{
        width: 120,
        height: 220,
        borderRadius:30
    },
    song_item_text:{
        marginTop:10,
        color:'white',
    },
    //playlist
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
    //footer
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom:-600,
        width: '100%', // Chiều rộng 100% của màn hình
        backgroundColor: 'lightgray', // Màu nền của footer
        paddingVertical: 10, 
    }

})
export default Home;
import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet ,Image,MusicProgressBar,Button} from "react-native";
import { AntDesign,Ionicons,Octicons,Entypo,FontAwesome5,FontAwesome, MaterialIcons,} from '@expo/vector-icons'; 
import ProgressBar from 'react-native-progress/Bar';
import { useRoute  } from "@react-navigation/native";
import axios from 'axios';
import { Audio } from "expo-av"; 
import color from "../css/color";
const PlayerMusic = () =>{
    const [progress, setProgress] = useState(0);
    const route = useRoute();
    const[isPlay,setPlay] =useState(false);
    const [song,setSong] = useState(null);
    const {IDSong} = route.params;
    const {Linkbh} = route.params;
    const [sound, setSound] = useState();
   
    const Sound = async () => {
        
        const { sound } = await Audio.Sound.createAsync(
            { uri: `http://thamlam0011-001-site1.anytempurl.com${Linkbh}` },
        );
        if(sound) {
            // await sound.pauseAsync();
            await sound.playAsync();
            setSound(sound);
            setPlay(!isPlay)

        }
        
      };
    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log({IDSong})
            const response = await axios.get(`http://thamlam0011-001-site1.anytempurl.com/api/Song/laysongID?id=${IDSong}`);
            setSong(response.data[0]);
            console.log(response.data)
            Sound();
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
        // setupPlayer()
      }, [IDSong]); 

    const playSound = async () => {
        
        const { sound } = await Audio.Sound.createAsync(
            { uri: `http://thamlam0011-001-site1.anytempurl.com${song.Linkbaihat}` },
        );
        if(sound) {
            
            if(isPlay) {
                await sound.pauseAsync();
                // await sound.playAsync();
            }
            else{
                // await sound.pauseAsync();
                await sound.playAsync();

            }
            setPlay(!isPlay)
            setSound(sound);

        }
        
      };
      useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync(); // Dừng phát nhạc khi component bị hủy
            }
          : undefined;
      }, [sound]);
      
      
    return(
        <View style= {styles.container} >
            
            <View style= {styles.header_body}>
                    <Image source={require('../images/logo2.png')} style={styles.logo_img}/>
            </View>
              {song && 
              (
                <View>
                    <View style= {styles.body}>
                        <View style= {styles.heading}>
                            <Text style= {styles.heading_text}>{song.Tenbai}</Text>
                        </View>
                        <View style= {styles.body_1}>
                            <Image source={{uri:`https://evolshop.click${song.Img}`}} style={styles.body_img}/>
                            <Text style={styles.body1_singer}>{song.Casi}</Text>
                        </View>
                    </View>

                    <View style= {styles.player}>
                        <View style= {styles.player_duration}>
                            <View style= {styles.player_duration_start}>
                                <Text style= {styles.duration_number_progress} >0:00</Text>
                            </View>
                            <ProgressBar progress={progress} width={470} height={10} color="#C4C4C4" backgroundColor= '#C4C4C4'/>
                            <View style= {styles.player_duration_end}>
                                <Text style= {styles.duration_number_progress}>{song.Thoiluong}</Text>
                            </View>
                        </View>
                        <View style= {styles.player_btn}>
                            <View style= {styles.player_btn_repeat}>
                                <FontAwesome name="repeat" size={24} color="white" />
                            </View>
                            <View style= {styles.player_btn_stepbackward}>
                                <AntDesign name="stepbackward" size={24} color="white" />
                            </View>
                            <View style= {styles.player_btn_play}>
                               
                                <Entypo style= {styles.player_btn_playPlay}
                                     onPress={playSound}
                                    name={isPlay ?"controller-paus": "controller-play"} size={36} color="white" />
                                    {/* name={"controller-play"} size={36} color="white" />  */}
                                    {/* <Button title="Phát nhạc" onPress={playSound} /> */}
                                
                                
                            </View>
                            <View style= {styles.player_btn_stepforward}>
                                <AntDesign name="stepforward" size={24} color="white" />
                            </View>
                            <View style= {styles.player_btn_random}>
                                <FontAwesome name="random" size={24} color="white" />
                            </View>
                            
                        </View>
                    </View>
                </View>
                

                
              )
              
              }  
           
            
           
        </View>
    )
}
const styles = StyleSheet.create({ 
    container:{
        backgroundColor:'#121214',
        height:'100%'
    },
    
    header_body:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        position: 'relative',
        top:10,
    },
    logo_img:{
        width:75,
        height: 50,
        borderRadius:25
        
    },
    heading_text:{
        color:color.headerColor,
        fontSize:20
    },
    body:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'space-around',
        marginHorizontal:5,
        marginBottom:40,
        marginTop:50,
    },
    //body1
    body_1:{
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop:30

       
    },
    body_img:{
        width:250,
        height: 250,
        borderRadius:210,
    },
   
    body1_singer:{
        color:'#7E7E7E',
        marginTop:20,
        fontSize:20
    },

    //player
    player:{
        paddingVertical:50
    },
    player_duration:{
        width:'100%',
        flexDirection:'row'
    },
    duration_number_progress:{
        color:'white',
        marginHorizontal:15
    },
    player_btn:{
        flexDirection:'row',
       marginTop:60,
        justifyContent:'space-around',
        alignItems:'center'
    },
    player_btn_play:{
        padding:10,
        borderRadius:40,
        position:'relative'
    },
    player_btn_playPause:{
    },
    player_btn_playPlay:{
    }
})
export default PlayerMusic;
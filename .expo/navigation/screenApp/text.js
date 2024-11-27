import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { View, Text, Button } from 'react-native';

const Textapp = () => {
  const [sound, setSound] = useState();

  
  const playSound = async () => {
    
      const { sound } = await Audio.Sound.createAsync({
        // uri: 'https://thamlam0011-001-site1.anytempurl.com/Assets/audio/hom%20nay%20toi%20buon2023-11-17%2008-05-30.mp3' 
        uri: 'https://thamlam0011-001-site1.anytempurl.com/Assets/audio/chạm%20đáy%20nỗi%20đau2023-12-05%2019-19-01.mp3'
      });
      setSound(sound);
      await sound.playAsync();
    
  };
  
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Dừng phát nhạc khi component bị hủy
        }
      : undefined;
  }, [sound]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Phát nhạc từ URL</Text>
      <Button title="Phát nhạc" onPress={playSound} />
    </View>
  );
}
export default Textapp;
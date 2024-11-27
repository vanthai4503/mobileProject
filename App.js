import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { MaterialIcons,FontAwesome,Ionicons ,AntDesign ,Entypo} from '@expo/vector-icons'; 
import Home from './.expo/navigation/screenApp/home';
import Setting from './.expo/navigation/screenApp/setting';
import Preson from './.expo/navigation/screenApp/preson';
import Theloai from './.expo/navigation/screenApp/theloai';
import PlayerMusic from './.expo/navigation/screenApp/music_player';
import Gioithieu from './.expo/navigation/screenApp/gioithieu';
import TheloaiShow from './.expo/navigation/screenApp/theloaishow';
import Dangphattrien from './.expo/navigation/screenApp/dangphattrien';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CasiShow from './.expo/navigation/screenApp/casiShow';
import color from './.expo/navigation/css/color';
import Textapp from './.expo/navigation/screenApp/text';
const Tab =createBottomTabNavigator();
const Stack =createNativeStackNavigator();

function TabNavigator() {
  return (
      // {/* css cho thanh footer ở dưới */}
    <Tab.Navigator  
         screenOptions={{
          tabBarActiveTintColor: color.headerColor, // Màu của tab đang được chọn
          tabBarStyle: {
            display: 'flex',
            backgroundColor: '#110533', // Đặt màu nền của BottomTabNavigator thành đỏ
          },
        }}>
            <Tab.Screen name="hometest" component={Home} options={{tabBarLabel:'HOME',tabBarIcon:({color,size})=>(
                <FontAwesome name="home" size={size} color={'white'}  />
            ),headerShown:false}} />
            <Tab.Screen name="theloai" component={Theloai} options={{tabBarLabel:'GENRES',tabBarIcon:({color,size})=>(
                <MaterialIcons name="category" size={size} color={'white'}  />
            ),headerShown:false}} />
            <Tab.Screen name="presonest" component={Preson}  options={{tabBarLabel:'PRESON',tabBarIcon:({color,size})=>(
                <Ionicons name="md-person-circle"  size={size} color={'white'}  />
            ),headerShown:false}} />
            <Tab.Screen name="setting" component={Setting}  options={{tabBarLabel:'SETTING',tabBarIcon:({color,size})=>(
                <AntDesign name="setting"  size={size} color={'white'}  />
            ),headerShown:false}} />
             <Tab.Screen name="gioithieu" component={Gioithieu}  options={{tabBarLabel:'SETTING',tabBarIcon:({color,size})=>(
                <AntDesign name="setting"  size={size} color={'white'}  />
            ),headerShown:false,tabBarVisible: false,}} />
        </Tab.Navigator>
  )
}

function PresonScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="PresonScreen" component={Preson} />
    </Stack.Navigator>
  )
}
function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name ="music" component={PlayerMusic}/>
      <Stack.Screen name ="casi" component={CasiShow}/>
      
      
    </Stack.Navigator>
  )
}


function TheloaScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="TheloaScreen" component={Theloai} />
      <Stack.Screen name="TheloaShowScreen" component={TheloaiShow} />
      <Stack.Screen name ="music" component={PlayerMusic}/>
    </Stack.Navigator>
  )
}
function SettingScreenStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="SettingScreenStack" component={Setting} />
      <Stack.Screen name ="gioithieu" component={Gioithieu}/>
      <Stack.Screen name="Dangphattrien"  component={Dangphattrien} />
      
    </Stack.Navigator>
  )
}
function TextApp() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Textapp"  component={Textapp} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer >
      {/* css cho thanh footer ở dưới */}
        <Tab.Navigator  
         screenOptions={{
          tabBarActiveTintColor: color.headerColor, // Màu của tab đang được chọn
          tabBarStyle: {
            display: 'flex',
            backgroundColor: '#110533', // Đặt màu nền của BottomTabNavigator thành đỏ
          },
        }}>
            <Tab.Screen name="hometest" component={HomeScreen} options={{tabBarLabel:'HOME',tabBarIcon:({color,size})=>(
                <FontAwesome name="home" size={size} color={'white'}  />
            ),headerShown:false}} />
            <Tab.Screen name="theloai" component={TheloaScreen} options={{tabBarLabel:'GENRES',tabBarIcon:({color,size})=>(
                <MaterialIcons name="category" size={size} color={'white'}  />
            ),headerShown:false}} />
            <Tab.Screen name="presonest" component={PresonScreen}  options={{tabBarLabel:'PRESON',tabBarIcon:({color,size})=>(
                <Ionicons name="md-person-circle"  size={size} color={'white'}  />
            ),headerShown:false}} />
            <Tab.Screen name="setting" component={SettingScreenStack}  options={{tabBarLabel:'SETTING',tabBarIcon:({color,size})=>(
                <AntDesign name="setting"  size={size} color={'white'}  />
            ),headerShown:false}} />
            {/* <Tab.Screen name="Textapp" component={Textapp}  options={{tabBarLabel:'Textapp',tabBarIcon:({color,size})=>(
                <AntDesign name="setting"  size={size} color={'white'}  />
            ),headerShown:false}} /> */}
        </Tab.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //  <Setting/>
    // //   {/* <PlayerMusic/>  */}
    // //   {/* <Home/> */}
    // //   {/* <Theloai/> */}
    // //   {/* <Gioithieu/>   */}
    // //   {/* <Dangphattrien/>   */}
    // //   {/* <UItabs/> */}
    // //   {/* <MainContainer/> */}
    // //   <StatusBar style="auto" />
    //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

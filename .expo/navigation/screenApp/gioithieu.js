import React, { useState } from "react";
import { View, Text, StyleSheet ,Image, ScrollView, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons,FontAwesome,Ionicons ,AntDesign ,Entypo} from '@expo/vector-icons'; 
import color from "../css/color";

const Gioithieu = () =>{
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.body_item}>
                <Text style={styles.body_item_header}>1 Tổng quan về Free Music </Text>
                <Text style={styles.body_item_text}>
App Free Music là người bạn đồng hành lý tưởng cho những người yêu thích âm nhạc, mang đến một trải nghiệm nghe nhạc tuyệt vời 
và hoàn toàn miễn phí. Với kho nhạc đa dạng người dùng có thể khám phá và thưởng thức các bản nhạc từ nhiều thể loại.
 
                     </Text>
                <Text style={styles.body_item_text}>Email:vanthai4503@gmail.com </Text>
                <Text style={styles.body_item_text}>Phát triển bởi Hùng và Thái </Text>
                <Text style={styles.body_item_text}>Phiên bản 1.0</Text>
                <Text style={styles.body_item_text}>Trụ sở:A.R World</Text>
            </View>

            <View style={styles.body_item}>
                <Text style={styles.body_item_header}>2 Donate </Text>
                <Text style={styles.body_item_text}>Nếu người dùng cảm thấy app mang lại trải nghiệm tốt thì có thể ửng hộ để admin tiếp tục phát triển.
                 Xin cảm ơn.</Text>
                 <Image source={require('../images/img-donate.jpg')} style={styles.body_item_img}/>
                 <Image source={require('../images/qrdonate.jpg')} style={styles.body_item_img}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:color.backgroundColor,
        height:'100%',
        width:'100%',
    },
    body_item:{
        padding:10
    },
    
    body_item_header:{
        color: color.headerColor
    },
    body_item_text:{
        color: 'white',
        padding:5

    },
    body_item_img:{
        width:250,
        height:250,
        marginLeft:'20%',
        marginTop:'8%'
    },

})

export default Gioithieu;
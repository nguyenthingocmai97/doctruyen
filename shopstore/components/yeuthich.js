import React from 'react';
import{Image,StyleSheet,Text,Touchable,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function yeuthich(props){
    const {thongtin,onPress} =props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
            
             <View style={styles.container}>
             <Image source={{uri:thongtin.images[0].url}} style={styles.categoryImage} />
                 <View>
                    <Text style={styles.title}>{thongtin.tentruyen}</Text>
                 </View>
             
             
      </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    categoryImage : {
        width:80,
        height:120,
        marginBottom:10
        
    },
    container:{
        flexDirection:'column',
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#FBEFFB',
        shadowColor:'#000',
        shadowOpacity:0.02,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginBottom:16
    },
    title:{
        textTransform:'uppercase',
        marginBottom: 3,
        fontWeight:'600',
        
        fontSize:12
    }

  });
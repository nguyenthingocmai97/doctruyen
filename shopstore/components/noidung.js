import React from 'react';
import{StyleSheet,Text,View} from 'react-native';

export default function noidung(props){
    const {noidungtruyen} =props;
    return (
        
            
    <View style={styles.container}>
            <Text style={styles.noidung}>{noidungtruyen.noidung}</Text>  
      </View>
       
    )
}
const styles=StyleSheet.create({
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
    noidung:{
        fontWeight:'600',  
        fontSize:16
    }

  });
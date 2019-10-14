import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import Yeuthich from '../components/yeuthich';
import axios from 'axios';

export default class Like  extends Component{

  static navigationOptions = () =>{
    return {
       title:"Danh sách truyện yêu thích"
    };
};


  constructor(props){
    super(props);
    this.state={
      caccuontruyen: []
    };
  }

  componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('categoryId');
    axios.get(`/caccuontruyen?id=${id}`)
    .then(res=>{
      this.setState({
        caccuontruyen:res.data
      })
    })
    .catch(error =>{
      console.error(error)
    })
  }

    
  
  render(){
    const {navigation} = this.props;
    const {caccuontruyen}=this.state;
    return(
     <FlatList
     style={styles.container}
     data={caccuontruyen}
     numColumns={2}
     renderItem={({item})=>
     <View style={styles.wrapper}>
       <Yeuthich thongtin={item}
       onPress={()=>navigation.navigate('noidungtruyen',{
        categoryName: item.tentruyen,
        categoryId:item.id,
      })} />
     </View>
     }
     keyExtractor={(item)=>`${item.id}`}
    //  contentContainerStyle={styles.container}
     />
    )
}}
const styles=StyleSheet.create({
  container : {
   flex :1,
   paddingHorizontal:8,
   paddingTop:16
   
  },
  wrapper:{
    flex:1,
    paddingHorizontal:8
  }
})
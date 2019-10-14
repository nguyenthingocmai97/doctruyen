import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import Caccuontruyen from '../components/Caccuontruyen';
import axios from 'axios';

export default class Category extends Component{

  static navigationOptions = ({navigation}) =>{
    return {
       title:navigation.getParam('categoryName'),
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
    // axios.get(`/truyen.php?a=cate&id=${id}`)
    axios.get(`/caccuontruyen?category=${id}`)
    .then(res=>{
      this.setState({
        caccuontruyen:res.data
      })
    })
    .catch(error =>{
      console.error(error)
    })
  }
  onlike = (id) => {
    // axios.get(`truyen.php?a=like&id=${id}`)
    // .then( (res) => {
    //     this.props.navigation.navigate('Like')
    // })
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
       <Caccuontruyen thongtin={item}
       onPress={()=>navigation.navigate('noidungtruyen',{
        categoryName: item.tentruyen,
        categoryId:item.id,
      })}
      like={ this.onlike(item.id)}
      like={()=>navigation.navigate('Like',{
        categoryName: item.tentruyen,
        categoryId:item.id,
      })}
      />
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
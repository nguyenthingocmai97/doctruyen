import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import Noidung from '../components/noidung';
import axios from 'axios';


export default class noidungtruyen extends Component{

  static navigationOptions = ({navigation}) =>{
    return {
       title:navigation.getParam('categoryName'),
    };
};


  constructor(props){
    super(props);
    this.state={
      noidung: []
    };
  }

  componentDidMount(){
    const {navigation} = this.props;
    const id = navigation.getParam('categoryId');
    axios.get(`/chitiettruyen?category=${id}`)
    .then(res=>{
      this.setState({
        noidung:res.data
      })
    })
    .catch(error =>{
      console.error(error)
    })
  }

    
  
  render(){
    const {navigation} = this.props;
    const {noidung}=this.state;
    return(
     <FlatList
     style={styles.container}
     data={noidung}
     renderItem={({item})=>
     <View style={styles.wrapper}>
       <Noidung noidungtruyen={item} />
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
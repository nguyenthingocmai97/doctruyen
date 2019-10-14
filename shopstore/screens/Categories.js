import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import axios from 'axios';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flexDirection:'row',alignItems:'space-around',width:100}}>
        <Text style={{flex:1,color:'#fff',alignItems:'center',fontWeight:'bold',fontSize:20}}>Thể loại</Text>
      </View>
      
    );
  }
}


export default class Categories extends Component{
    static navigationOptions = {
        // title: 'Cơm sinh viên',
        headerTitle: <LogoTitle />,
        headerStyle: {
          backgroundColor: '#F5A9F2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
  constructor(props){
    super(props);
    this.state = {
        theloai : [
          
        ]
    };
}
componentDidMount(){
  // axios.get('/Category.php?a=getall')
  axios.get('/theloai')
  .then(res=>{
    this.setState({
      theloai:res.data
    })
    console.log(res.data);
  })
  .catch(error =>{
    console.error(error)
  })
}
  render(){
    const {navigation} = this.props;
    const {theloai} = this.state;
    return(
     
          <FlatList data={theloai}
          style={styles.container}
          numColumns={3}
          renderItem={({item}) =>
          
            <View style={styles.wrapper}>
              <CategoryListItem category={item}
          onPress={()=>navigation.navigate('Category',{
            categoryName : item.ten_theloai,
            categoryId: item.id,
          })}/>
            </View>
          }
          keyExtractor={item => `${item.id}` }
          contentContainerStyle={{  paddingTop:16,paddingLeft:16,paddingRight:16}}
          />
       
      
    )
  }
}
const styles=StyleSheet.create({
  container : {
   flex :1,
   paddingHorizontal:3,
   paddingTop:16,
  
   
  },
  wrapper:{
    width:80,
    flex:1,
    paddingHorizontal:4
  }
})
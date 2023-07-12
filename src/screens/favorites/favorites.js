import React ,{useState,useEffect} from 'react';
import {View,Text,FlatList,ImageBackground,Image,TouchableOpacity} from 'react-native';
import AppStyle from '../../components/AppStyle';
import axios from 'axios'
const Favorites = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            getProData();
          });
    },[props.navigation]);

    const getProData = async() => {
        const api = "http://"+ip+":3001/api/get_favs"
        try {
            const response = await axios.get(api);
            setData(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const getRidOfIt = async(id) => {
        const api = "http://"+ip+":3001/api/del_fav"
        try {
            const response = await axios.post(api,{id: id});
            setData(response.data.message);
            getProData()
        } catch (error) {
            console.log(error);
        }
    }

    //console.log(data)
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{props.navigation.navigate('productDetails',item)}} style={{flexDirection: 'row',width:'100%',height: 100 , marginTop:24}}>
            <Image style={{width:'45%',height:'100%'}} source={{uri: item.productImage}}>
                
            </Image>
            <Text style={{textAlign:'center',width:'55%',height:'45%',marginTop:'10%'}}>
              {item.productName}
            </Text>
            <TouchableOpacity onPress={()=>{getRidOfIt(item._id)}} style={{width:'3%',height:'17%',backgroundColor:'red',position:'absolute',top: 15,right:15}}><Text>X</Text></TouchableOpacity>
        </TouchableOpacity>
      );
    return(
        <View style={AppStyle.container}>
           <FlatList style={{flex:1,width:'100%',height:'100%'}} data={data} renderItem={renderItem} />
        </View>
    )
}

export default Favorites;
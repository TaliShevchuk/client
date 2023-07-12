import {View,Text,TouchableOpacity,FlatList,Image} from 'react-native';
import AppStyle from '../../components/AppStyle';
ip = "127.0.0.1"
import axios from 'axios';
import React, {useState,useEffect} from 'react';

const ProductDetails = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getProData();
    },[]);

    const getProData = async() => {
        const api = "http://"+ip+":3001/api/get_all_cat"
        try {
            const response = await axios.get(api);
            setData(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{props.navigation.navigate('SubCategory',item._id)}} style={{flexDirection: 'row',width:'100%',height: 100 , marginTop:24}}>
            <Image style={{width:'45%',height:'100%'}} source={{uri: item.Image}}>

            </Image>
            <Text style={{textAlign:'center',width:'55%',height:'45%',marginTop:'10%'}}>
              {item.categoryName}
            </Text>
        </TouchableOpacity>
      );
    console.log(data)
    return(
        <View style={AppStyle.container}>
           <FlatList style={{flex:1,width:'100%',height:'100%'}} data={data} renderItem={renderItem} />
        </View>
    )
}

export const screenOptions = (navData) => {
    return{
        headerTitel: 'Product Detailsssss'
    }
}

export default ProductDetails;
import React ,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Image,FlatList} from 'react-native';
import AppStyle from '../../components/AppStyle';
import axios from 'axios'
ip = "127.0.0.1"
const Product = (props) => {
    console.log(props)
    const [data, setData] = useState(null);

    useEffect(() => {
        getProData();
    },[]);

    const getProData = async() => {
        const api = "http://"+ip+":3001/api/find_product_by_id"
        try {
            const response = await axios.post(api,{id:props.route.params});
            setData(response.data.message);
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
            <Text style={{textAlign:'center',height: '20%',marginTop:'10%',position:'absolute',bottom: 1,right: 18}}>
                {item.productPrice}₪
            </Text>
        </TouchableOpacity>
      );
    return(
        <View style={AppStyle.container}>
           <FlatList style={{flex:1,width:'100%',height:'100%'}} data={data} renderItem={renderItem} />
        </View>
    )
}

export const screenOptions = (navData) => {
    return{
        headerTitel: 'Products'
    }
}

export default Product;
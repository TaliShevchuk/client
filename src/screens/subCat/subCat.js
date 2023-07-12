import React ,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,FlatList,Image} from 'react-native';
import axios from 'axios'

import AppStyle from '../../components/AppStyle';
ip = "10.70.0.163"

const SubCategory = (props) => {
    console.log(props)
    const [data, setData] = useState(null);

    useEffect(() => {
        getProData();
    },[]);

    const getProData = async() => {
        const api = "http://"+ip+":3001/api/get_sub_cat_ById"
        try {
            const response = await axios.post(api,{id:props.route.params});
            setData(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data)
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{props.navigation.navigate('Products',item._id)}} style={{flexDirection: 'row',width:'100%',height: 100 , marginTop:24}}>
            <Image style={{width:'45%',height:'100%'}} source={{uri: item.Image}}>

            </Image>
            <Text style={{textAlign:'center',width:'55%',height:'45%',marginTop:'10%'}}>
              {item.SubCategoryName}
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
        headerTitel: 'Sub Category'
    }
}

export default SubCategory;
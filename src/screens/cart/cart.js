import React ,{useState,useEffect} from 'react';
import {View,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import AppStyle from '../../components/AppStyle';
import axios from 'axios'
const Cart = (props) => {
    const [data, setData] = useState(null);
    const [total,setTotal] = useState(0);
    useEffect(() => {
        props.navigation.addListener('focus', () => {
            getProData();
          });
    },[]);

    const getProData = async() => {
        const api = "http://"+ip+":3001/api/get_cart"
        try {
            const response = await axios.get(api);
            setData(response.data.message);
            setTotal(0)
            var num =0
            for(var i in response.data.message){
                num +=response.data.message[i].productPrice
            }
            setTotal(num)
        } catch (error) {
            console.log(error);
        }
    }
    const getRidOfIt = async(id) => {
        const api = "http://"+ip+":3001/api/del_cart"
        try {
            const response = await axios.post(api,{id: id});
            setData(response.data.message);
            getProData()
        } catch (error) {
            console.log(error);
        }
    }

    //console.log(data)
    //console.log(total)
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{}} style={{flexDirection: 'row',width:'100%',height: 100 , marginTop:24}}>
            <Image style={{width:'45%',height:'100%'}} source={{uri: item.productImage}}>
            </Image>
            <Text style={{textAlign:'center',width:'55%',height:'45%',marginTop:'10%'}}>
              {item.productName}
            </Text>
            <Text style={{textAlign:'center',height: '20%',marginTop:'10%',position:'absolute',bottom: 1,right: 18}}>
                {item.productPrice}₪
            </Text>
            <TouchableOpacity onPress={()=>{getRidOfIt(item._id)}} style={{width:'3%',height:'17%',backgroundColor:'red',position:'absolute',top: 15,right:15}}><Text>X</Text></TouchableOpacity>
        </TouchableOpacity>
      );
    return(
        <View style={AppStyle.container}>
           <FlatList style={{marginTop: 40,flex:1,width:'100%',height:'100%'}} data={data} renderItem={renderItem} />
           <View style={{position:'absolute',width:'20%',height:'10%',bottom:10,right:10}}><Text style={{color:'red' ,fontSize:20,width:'100%',height:'100%',textAlign:'center'}}>{total}₪</Text></View>
        </View>
    )
}

export default Cart;
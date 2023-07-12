import React ,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Image,ImageBackground} from 'react-native';
import AppStyle from '../../components/AppStyle';
import axios from 'axios'
ip = "127.0.0.1"
const ProductDetails = (props) => {
    const additplease = async() =>{
        const api = "http://"+ip+":3001/api/add_fav"
        try {
            const response = await axios.post(api,{id: props.route.params._id});
            if(response.data.message == 0){
                alert('already there')
            }
        } catch (error) {
            console.log(error);
        }
    }
    const buyitplease = async() =>{
        const api = "http://"+ip+":3001/api/add_cart"
        try {
            const response = await axios.post(api,{id: props.route.params._id});
            if(response.data.message == 0){
                alert('already there')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={{flex:1,width:"100%",height:"100%"}}>
            <Image style={{width:"100%",height:"37%"}} source={{uri: props.route.params.productImage}}></Image>
            <Text style={{width:"100%",fontSize: 30,textAlign:'center',marginTop:7}}>{props.route.params.productName}</Text>
            <Text style={{width:"100%",fontSize: 18,paddingLeft:10,paddingRight:10,marginTop:7}}>{props.route.params.productDiscription}</Text>
            <TouchableOpacity onPress={()=>{additplease()}} style={{bottom:10,right:10,position:'absolute',width:'29%',height:'13%'}}>
                 <ImageBackground style={{height:'100%',width:'100%',alignSelf:'center'}} imageStyle={{resizeMode:'cover'}} source={{uri: 'https://www.pngplay.com/wp-content/uploads/15/Purple-Heart-PNG-HD-Quality.png'}}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{buyitplease()}} style={{bottom:10,left:10,position:'absolute',width:'24%',height:'13%'}}>
                <ImageBackground style={{height:'100%',width:'100%',alignSelf:'center'}} imageStyle={{resizeMode:'stretch'}} source={{uri: 'https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-violet.png'}}></ImageBackground>
            </TouchableOpacity>
            <Text style={{fontSize: 40,textAlign:'center',height: '20%',marginTop:'10%',position:'absolute',bottom: 1,right: '53%',zIndex: 10}}>
                {props.route.params.productPrice}₪
            </Text>
        </View>
    )
}

export const screenOptions = (navData) => {
    return{
        headerTitel: 'Products'
    }
}

export default ProductDetails;
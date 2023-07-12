import {StyleSheet} from 'react-native';
import AppColors from './AppColors';

export default StyleSheet.create({
    container:{
        height: "100%",
        width: "100%",
        borderColor: "black",
        borderWidth: 5
    },
    btn:{
        width:'100%', backgroundColor:AppColors.blanchedalmond,
        height:50, borderRadius:30, alignItems: 'center' ,justifyContent:'center',
    },
    btn_text:{
        color: AppColors.black,
        fontSize:16
    }
})
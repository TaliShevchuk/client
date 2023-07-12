import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AppColors from '../components/AppColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../screens/cart/cart'
import Favorites from '../screens/favorites/favorites'
import store,{screenOptions as StoreScreenOP} from '../screens/store/store';
import subCat,{screenOptions as SubCatScreenOp} from '../screens/subCat/subCat';
import product,{screenOptions as ProductScreenOp} from '../screens/product/product';
import productDetails,{screenOptions as ProductDetScreenOp} from '../screens/productDetails/productDetails';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const defaultNavOptions = {
    headerStyle: {backgroundColor:AppColors.black},
    headerTintColor: AppColors.white
}

const StoreStackNavigator = createNativeStackNavigator();
export const StoreStack = () => {
    return( 
    <StoreStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <StoreStackNavigator.Screen name ="Category" component={store} options={StoreScreenOP}/>
        <StoreStackNavigator.Screen name ="SubCategory" component={subCat} options={SubCatScreenOp}/>
        <StoreStackNavigator.Screen name ="Products" component={product} options={ProductScreenOp}/>
        <StoreStackNavigator.Screen name ="productDetails" component={productDetails} options={ProductDetScreenOp}/>
    </StoreStackNavigator.Navigator>
    )
}

const FavStackNav = createNativeStackNavigator();
export const FavStack = () =>{
    return(
        <FavStackNav.Navigator screenOptions={defaultNavOptions}>
            <FavStackNav.Screen name="Favorates" component={Favorites} />
            <FavStackNav.Screen name ="productDetails" component={productDetails} options={ProductDetScreenOp}/>
        </FavStackNav.Navigator>
    )
}


const AppTabs = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTabs.Navigator shifting={true} activeColor={AppColors.secondary} inactiveColor={AppColors.sub} barStyle={{alignItems:'baseline', backgroundColor : AppColors.Main ,}}>
            

            <AppTabs.Screen name='StoreTab' component={StoreStack}
            options={{tabBarLabel: '',tabBarIcon: ({color}) => (<MaterialCommunityIcons name='store' color={color} size={30} />)}} />
            
            <AppTabs.Screen name='FavoritesTab' component={FavStack}
            options={{tabBarLabel: '',tabBarIcon: ({color}) => (<Fontisto name='star' color={color} size={30} />)}}/>

            <AppTabs.Screen name='CartTab' component={Cart}
            options={{ unmountOnBlur: true,tabBarLabel: '',tabBarIcon: ({color}) => (<FontAwesome name='shopping-cart' color={color} size={30} />)}}/>
        </AppTabs.Navigator>
    )
}
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomtabnavigation from '../tab-navigation/HomeBottomtabnavigation';
import MyOrderTopTabNavigation from '../tab-navigation/MyOrderTopTabNavigation';
import ProductDetailsScreen from '@/components/ui/screen/ProductDetailsScreen';
const stack = createStackNavigator();

export default function stackNavigator(){
return(
    <stack.Navigator>
        <stack.Screen name={'process'}
        options={{headerLeft:()=>null, headerShown:false}}
        
        component={HomeBottomtabnavigation}/>

        <stack.Screen name={'MyOrder'}
        options={{title:'MyOrder'}}
        
        component={MyOrderTopTabNavigation}/>

        <stack.Screen name={'ProductDetails'}
        options={{title:'ProductDetailsScreen'}}
        
        component={ProductDetailsScreen}/>
    </stack.Navigator>
)
}

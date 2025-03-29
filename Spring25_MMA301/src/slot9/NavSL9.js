//npm i @react-navigation/stack;
//npm i @react-navigation/native
import ListProductSL9 from "./ListProductSL9";
import DetailSL9 from "./DetailSL9";
import CartSL9 from "./CartSL9";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const NavSL9 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListProductSL9">
                <Stack.Screen name="ListProductSL9" component={ListProductSL9} />
                <Stack.Screen name="DetailSL9" component={DetailSL9} />
                <Stack.Screen name="CartSL9" component={CartSL9} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavSL9;
import {NavigationContainer} from "@react-navigation/native";
import Feed from "./screens/Feed";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Add from "./screens/Add";
import Settings from "./screens/Settings";
import { SimpleLineIcons, AntDesign, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons'; 
import Colors from "./styles/Colors";
import Details from "./screens/HomeStack/Details";

//Stack
const HomeStack = createNativeStackNavigator();

const HomeStackGroup = ()=>{
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Feed}/>
            <HomeStack.Screen name="Details" component={Details}/>
        </HomeStack.Navigator>
    )
}
//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup(){
    return (
        <Tab.Navigator
        screenOptions={({route, navigation})=>({
            tabBarStyle: {
                position: "absolute",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height: 50,
                paddingTop:10
            },
            tabBarIcon: ({color, focused, size})=>{
                let iconName;
                switch(route.name){
                    case "Feed": iconName = focused ? "home" : "home-outline";
                    break;
                    case "Add": iconName = focused ? "add-circle" : "add";
                    break;
                    case "Settings": iconName = focused? "settings": "settings-outline";
                    break;
                    default:
                }
                return <Ionicons name={iconName} size={25} color={color} />
            },
            tabBarActiveTintColor: Colors.blue,
            // tabBarBackground: () =>
        })}>
            <Tab.Screen name="Feed" component={HomeStackGroup} options={{
                headerShown: false
            }}/>
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default Navigation = ()=>{
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}
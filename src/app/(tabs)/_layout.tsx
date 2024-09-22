import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
export default function TabsLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'black', headerTitleAlign: "center", tabBarShowLabel: false}} >
            <Tabs.Screen name="index" options={{ headerTitle: "For you",
            tabBarIcon: ({color}) => <FontAwesome name="home" size={26} color={color} />
             }} />
             <Tabs.Screen name="new" options={{ headerTitle: "Create post",
            tabBarIcon: ({color}) => <FontAwesome name="plus-square-o" size={26} color={color} />
             }} />
             <Tabs.Screen name="profile" options={{ headerTitle: "Create post",
            tabBarIcon: ({color}) => <FontAwesome name="user" size={26} color={color} />
             }} />
        </Tabs>
    )
}

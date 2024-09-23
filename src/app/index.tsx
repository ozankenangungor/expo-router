import { Text } from "react-native";
import { Link, Redirect } from "expo-router";


export default function Home() {
    return (
        <Redirect href="/(tabs)" />
    )
}
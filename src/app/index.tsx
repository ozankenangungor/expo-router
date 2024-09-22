import { Text } from "react-native";
import { Link, Redirect } from "expo-router";


export default function Home() {
    return (
        // <Link href="/about">Go to About</Link>
        <Redirect href="/(tabs)" />
    )
}
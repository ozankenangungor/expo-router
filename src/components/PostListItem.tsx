import { Image, Text, View } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons"



export default function PostListItem({ post }) {
    
    return (
        <View className="bg-white " >
            {/* Header */}
            <View className="p-3 flex-row items-center gap-2">
                <Image source={{uri: post.user.image_url}} className="w-12 aspect-square rounded-full"/>
                <Text className="font-semibold text-lg">{post.user.username}</Text>
            </View>
            <Image source={{uri: post.image_url}} className="w-full aspect-[4/3]"/>
            {/* Icons */}
            <View className="flex-row gap-3 p-3 justify-between">
                <View className="flex-row gap-3">
                <AntDesign name="hearto" size={24} color="black" />
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                <Feather name="send" size={24} color="black" />
                </View>
                <Feather name="bookmark" size={24} color="black" className="" />
            </View>
        </View>
    )


}

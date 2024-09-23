import PostListItem from "@/src/components/PostListItem";
import { FlatList, View } from "react-native";
import posts from "@/assets/data/posts.json"



export default function FeedScreen() {
    return (
      <FlatList data={posts} 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{gap: 10, maxWidth:512, width:'100%'}} 
      renderItem={({item}) => {
         return (
         <View className="items-center">
         <PostListItem post={item} />
         </View>
    )
    }}
    />
    )
   
}

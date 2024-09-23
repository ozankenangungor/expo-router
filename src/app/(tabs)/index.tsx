
import PostListItem from "@/src/components/PostListItem";
import { FlatList, View } from "react-native";
import posts from "@/assets/data/posts.json"



export default function FeedScreen() {
    return (
      <FlatList data={posts} renderItem={({item}) => <PostListItem post={item} />} 
      contentContainerStyle={{gap: 10, maxWidth:512, width:'100%', alignSelf:'center'}} 
      showsVerticalScrollIndicator={false} 
    />
    )
   
}
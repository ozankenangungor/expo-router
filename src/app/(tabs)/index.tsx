import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function FeedScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 items-center justify-center bg-gray-50 px-6 py-12">
                    <View className="w-full max-w-sm space-y-8">
                        <View>
                            <Text className="text-3xl font-bold text-center text-gray-900">Kayıt Ol</Text>
                            <Text className="mt-2 text-center text-gray-600">Hesabınızı oluşturun ve keşfetmeye başlayın</Text>
                        </View>
                        
                        <View className="space-y-6">
                            <View>
                                <TextInput 
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-700"
                                    placeholder="Kullanıcı Adı"
                                />
                            </View>
                            
                            <View>
                                <TextInput 
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-700"
                                    placeholder="E-posta"
                                    keyboardType="email-address"
                                />
                            </View>
                            
                            <View className="relative">
                                <TextInput 
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-700 pr-10"
                                    placeholder="Şifre"
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity 
                                    onPress={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3"
                                >
                                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
                                </TouchableOpacity>
                            </View>
                            
                            <View className="relative">
                                <TextInput 
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-700 pr-10"
                                    placeholder="Şifreyi Onayla"
                                    secureTextEntry={!showConfirmPassword}
                                />
                                <TouchableOpacity 
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-3"
                                >
                                    <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="gray" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-lg shadow-md active:bg-blue-700">
                            <Text className="text-white text-center font-bold text-lg">Kayıt Ol</Text>
                        </TouchableOpacity>
                        
                        <View className="flex-row justify-center">
                            <Text className="text-gray-600">Zaten bir hesabınız var mı? </Text>
                            <TouchableOpacity>
                                <Text className="text-blue-600 font-semibold">Giriş Yap</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

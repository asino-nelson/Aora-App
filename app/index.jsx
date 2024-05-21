import { ScrollView, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomBtn from "../components/CustomBtn";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: " 100% " }} >
        <View className="w-full min-h-[90vh] items-center justify-center px-4">
          <Image
            source={images.logo}
            className="h-20 w-28"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="h-72 max-w-xs"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="font-bold text-white text-center text-3xl">
              Discover endless possibilities with {""}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="absolute w-32 h-3 -bottom-1 -right-8"
            />
          </View>
          <Text className="text-gray-100 text-sm text-center font-pregular mt-7">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora{" "}
          </Text>
          <CustomBtn
            title={"Continue with Email"}
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}

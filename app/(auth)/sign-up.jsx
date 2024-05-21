import { View, Image, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomBtn from "../../components/CustomBtn";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username:"",
    email: "",
    password: "",
  });

  const submit = () => {};

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="h-8 w-28"
            resizeMode="contain"
          />
          <Text className="font-psemibold text-2xl text-white mt-10 ">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomBtn
            title={"Sign Up"}
            containerStyles="w-full mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="justify-center flex-row gap-2 pt-5">
            <Text className="text-lg font-pregular text-gray-100">
              Already have an account?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-lg font-pregular text-secondary-200"
            >
              Log In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

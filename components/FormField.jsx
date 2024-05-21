import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
  ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`${otherStyles} space-y-2 w-full`}>
      <Text className="text-gray-100 text-base font-psemibold">{title}</Text>
      <View className="bg-black-100 w-full h-14 px-4 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white text-base font-psemibold"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry= {title === "Password" && !showPassword}
        />
        {title === "Password" && (
            <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                <Image
                source={!showPassword ? icons.eyeHide : icons.eye}
                className="w-6 h-6"
                resizeMode="contain"
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

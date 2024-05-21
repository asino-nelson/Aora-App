import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomBtn = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-200 items-center justify-center rounded-xl min-h-[60px] ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      disabled={isLoading}
      activeOpacity={0.7}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles} `}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

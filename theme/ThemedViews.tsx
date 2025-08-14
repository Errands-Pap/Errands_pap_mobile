// theme/Themed.tsx
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ThemedView = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <View className={`bg-white dark:bg-dark-view w-full ${className}`}>
      {children}
    </View>
  );
};

export const ThemedSafeAreaView = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-view">
      <View className={`flex-1 bg-white dark:bg-dark-view ${className}`}>
        {children}
      </View>
    </SafeAreaView>
  );
};

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
    <View className={`flex-1 bg-white dark:bg-dark-view ${className}`}>
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
    <SafeAreaView style={{ flex: 1 }}>
      <View className={`flex-1 bg-white dark:bg-dark-view ${className}`}>
        {children}
      </View>
    </SafeAreaView>
  );
};

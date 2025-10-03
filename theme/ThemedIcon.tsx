import React from "react";
import { useColorScheme } from "react-native";
import Icon, { IconName } from "react-native-remix-icon";

interface ThemedIconProps {
  name: IconName;
  size?: number;
  color?: string; // allow overriding
}

const ThemedIcon: React.FC<ThemedIconProps> = ({ name, size = 24, color }) => {
  const scheme = useColorScheme();
  const defaultColor = scheme === "dark" ? "white" : "gray";

  return <Icon name={name} size={size} color={color ?? defaultColor} />;
};

export default ThemedIcon;
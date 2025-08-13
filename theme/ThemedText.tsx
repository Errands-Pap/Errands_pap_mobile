import React, { ReactNode } from "react";
import { Text } from "react-native";

const ThemedText = ({
  children,
  className,
  numberOfLines,
}: {
  children: ReactNode;
  className?: string;
  numberOfLines?: number;
}) => {
  return (
    <Text
      className={`text-[#06050f] dark:text-dark-text ${className}`}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
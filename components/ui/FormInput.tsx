// components/FormInput.tsx
import ThemedText from "@/theme/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import React, { forwardRef, useMemo, useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

type Variant = "text" | "password" | "email" | "number" | "phone" | "url" | "search";

type VariantProps = Partial<
  Pick<
    TextInputProps,
    | "secureTextEntry"
    | "keyboardType"
    | "autoCapitalize"
    | "textContentType"
    | "inputMode"
    | "returnKeyType"
    | "autoCorrect"
  >
>;

type Props = Omit<
  TextInputProps,
  "secureTextEntry" | "keyboardType" | "autoCapitalize" | "textContentType" | "inputMode"
> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  variant?: Variant;
  containerClassName?: string;
  inputClassName?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

function mapVariantProps(variant: Variant, secure: boolean): VariantProps {
  switch (variant) {
    case "password":
      return {
        secureTextEntry: secure,
        autoCapitalize: "none",
        autoCorrect: false,
        textContentType: "password",
      };
    case "email":
      return {
        keyboardType: "email-address",
        autoCapitalize: "none",
        autoCorrect: false,
        textContentType: "emailAddress",
        inputMode: "email", // properly typed
      };
    case "number":
      return {
        keyboardType: "numeric",
        inputMode: "numeric", // properly typed
        autoCapitalize: "none",
      };
    case "phone":
      return {
        keyboardType: "phone-pad",
        textContentType: "telephoneNumber",
        autoCapitalize: "none",
        inputMode: "tel",
      };
    case "url":
      return {
        keyboardType: "url",
        textContentType: "URL",
        autoCapitalize: "none",
        inputMode: "url",
      };
    case "search":
      return {
        returnKeyType: "search",
        autoCapitalize: "none",
        autoCorrect: false,
        inputMode: "search",
      };
    case "text":
    default:
      return {
        keyboardType: "default",
        inputMode: "text",
      };
  }
}

const FormInput = forwardRef<TextInput, Props>(function FormInput(
  {
    label,
    helperText,
    errorText,
    variant = "text",
    containerClassName = "",
    inputClassName = "",
    left,
    right,
    placeholderTextColor = "#9ca3af",
    ...rest
  },
  ref
) {
  const [secure, setSecure] = useState(variant === "password");
  const variantProps = useMemo(() => mapVariantProps(variant, secure), [variant, secure]);

  const borderClass = errorText ? "border-red-500" : "border-[#c8cad0]";

  return (
    <View className={`gap-1 ${containerClassName}`}>
      {label ? (
        <ThemedText className="text-base text-gray-600 dark:text-gray-300 mb-2">
          {label}
        </ThemedText>
      ) : null}

      <View className={`flex-row items-center rounded-xl border ${borderClass} pr-3`}>
        {left ? <View className="mr-2">{left}</View> : null}

        <TextInput
          ref={ref}
          className={["flex-1 p-4 text-sm text-[#06050f] dark:text-dark-text", inputClassName].join(
            " "
          )}
          placeholderTextColor={placeholderTextColor}
          {...variantProps}
          {...rest}
        />

        {variant === "password" ? (
          <Pressable onPress={() => setSecure((s) => !s)} hitSlop={8}>
            <Ionicons name={secure ? "eye-off" : "eye"} size={18} color={"#9ca3af"} />
          </Pressable>
        ) : (
          right
        )}
      </View>

      {errorText ? (
        <ThemedText className="text-xs text-red-500">{errorText}</ThemedText>
      ) : helperText ? (
        <ThemedText className="text-xs text-gray-500 dark:text-dark-text">
          {helperText}
        </ThemedText>
      ) : null}
    </View>
  );
});

export default FormInput;

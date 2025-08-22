import ButtonPrimary from "@/components/ui/ButtonPrimary";
import FormInput from "@/components/ui/FormInput";
import { ThemedSafeAreaView, ThemedView } from "@/theme/ThemedViews";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";

export default function ForgotPassword() {
  const router = useRouter();
  const [emailInserted, setEmailInserted] = useState(false);

  return (
    <ThemedSafeAreaView className="items-center justify-center">
      <ThemedView className="items-center justify-center p-6">
        <ThemedView className="items-center justify-center mb-8">
          <Text className="text-2xl text-[#4dbf00] font-medium">
            Reset Your Password
          </Text>
        </ThemedView>

        <ThemedView className="gap-6 mb-10">
          <FormInput
            label="Email Address"
            placeholder="email@example.com"
          />

          {!emailInserted && <ButtonPrimary
            text="Confirm Email"
            onPress={() => setEmailInserted(true)}
          />}

          {emailInserted && (
            <>
              <FormInput
                label="New Password"
                placeholder="*******"
                variant="password"
              />

              <FormInput
                label="Confirm New Password"
                placeholder="*******"
                variant="password"
              />
            </>
          )}
        </ThemedView>

        {emailInserted && <ThemedView className="gap-6 mb-10">
          <ButtonPrimary text="Reset Password" />
        </ThemedView>}
      </ThemedView>
    </ThemedSafeAreaView>
  );
}

import ButtonGoogle from "@/components/ui/ButtonGoogle";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import FormInput from "@/components/ui/FormInput";
import ThemedText from "@/theme/ThemedText";
import { ThemedSafeAreaView, ThemedView } from "@/theme/ThemedViews";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export default function SignIn() {
  const router = useRouter();

  return (
    <ThemedSafeAreaView className="items-center justify-center">
      <ThemedView className="items-center justify-center p-6">
        <ThemedView className="items-center justify-center mb-8">
          <ThemedText className="text-lg font-medium">Welcome Back!</ThemedText>
          <Text className="text-2xl text-[#4dbf00] font-medium">Login</Text>
        </ThemedView>

        <ThemedView className="gap-6 mb-4">
          <FormInput label="Email Address" placeholder="email@example.com" />

          <FormInput
            label="Password"
            placeholder="*******"
            variant="password"
          />
        </ThemedView>

        <Pressable
          onPress={() => router.push("/forgot-password")}
          className="self-end mb-8"
        >
          <ThemedText className="text-sm font-bold underline">
            Forgot Password?
          </ThemedText>
        </Pressable>

        <ThemedView className="gap-6 mb-10">
          <ButtonGoogle text="Continue with Google" />
          <ButtonPrimary text="Login" />
        </ThemedView>

        <ThemedView className="flex-row items-center justify-center gap-2">
          <ThemedText className="text-sm">New User?</ThemedText>
          <Pressable onPress={() => router.push("/sign-up")}>
            <ThemedText className="text-sm font-bold underline">
              Sign Up Here
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ThemedSafeAreaView>
  );
}

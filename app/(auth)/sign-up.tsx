import ButtonGoogle from "@/components/ui/ButtonGoogle";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import FormInput from "@/components/ui/FormInput";
import ThemedText from "@/theme/ThemedText";
import { ThemedSafeAreaView, ThemedView } from "@/theme/ThemedViews";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function SignUp() {
  const router = useRouter();

  return (
    <ThemedSafeAreaView className="items-center justify-center">
      <ScrollView
        className="w-full"
        contentContainerClassName="w-full max-w-[560px] mx-auto px-6 py-6"
        contentInsetAdjustmentBehavior="automatic"
      >
        <ThemedView className="items-center justify-center mb-8">
          <ThemedText className="text-lg font-medium">
            Let's Get You Started
          </ThemedText>
          <Text className="text-2xl text-[#4dbf00] font-medium">Sign Up</Text>
        </ThemedView>

        <ThemedView className="gap-3 mb-10">
          <FormInput label="First Name" placeholder="John" />

          <FormInput label="Last Name" placeholder="Doe" />

          <FormInput label="Email Address" placeholder="email@example.com" />

          <FormInput
            label="Phone Number"
            placeholder="+254712345678"
            variant="phone"
          />

          <FormInput
            label="Password"
            placeholder="*******"
            variant="password"
          />

          <FormInput
            label="Confirm Password"
            placeholder="*******"
            variant="password"
          />
        </ThemedView>

        <ThemedView className="gap-6 mb-10">
          <ButtonGoogle text="Continue with Google" />
          <ButtonPrimary text="Sign Up" />
        </ThemedView>

        <ThemedView className="flex-row items-center justify-center gap-2">
          <ThemedText className="text-sm">Already have an account?</ThemedText>
          <Pressable onPress={() => router.push("/sign-in")}>
            <ThemedText className="text-sm font-bold underline">
              Login Here
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ScrollView>
    </ThemedSafeAreaView>
  );
}

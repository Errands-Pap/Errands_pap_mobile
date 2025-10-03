import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ThemedIcon from "@/theme/ThemedIcon";
import ThemedText from "@/theme/ThemedText";
import { ThemedView } from "@/theme/ThemedViews";
import {
  Image,
  Pressable,
  Text,
  View,
  useColorScheme
} from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView className="flex-1">
      <Pressable className="pt-14 pb-6 bg-[#4dbf0080] flex-row items-center justify-center">
        <ThemedText className="text-lg font-semibold text-center">
          Epic Heights, Rungiri, Kenya
        </ThemedText>
        <ThemedIcon name="arrow-drop-down-fill" />
      </Pressable>

      <ThemedView className="relative h-1/2">
        <Image
          source={require("../../../assets/images/delivery.png")}
          className="w-full h-full object-cover rounded-bl-[300px]"
          resizeMode="cover"
        />

        <View className="absolute inset-0 bg-black/45 rounded-bl-[300px]" />

        <ThemedView>
          <Text className="text-center text-4xl text-[#4dbf00] font-semibold absolute bottom-16 left-52 -translate-x-1/2 -translate-y-1/2">
            Don't sweat it, we got it!
          </Text>
        </ThemedView>
      </ThemedView>
      <ThemedView className="pb-14 px-6 gap-8 flex-1 items-center justify-center">
        <ThemedText className="text-center text-lg font-semibold">
          What do you want us to do for you today?
        </ThemedText>

        <ThemedView className="gap-4">
          <ButtonPrimary text="View My Orders" />
          <ButtonPrimary text="Get an errand done" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

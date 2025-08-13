import ThemedText from "@/theme/ThemedText";
import { ThemedView } from "@/theme/ThemedViews";

export default function HomeScreen() {
  return (
    <ThemedView className="flex-1 items-center justify-center">
      <ThemedText>Home</ThemedText>
    </ThemedView>
  );
}


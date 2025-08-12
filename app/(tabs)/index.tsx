import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <ThemedView className="flex-1 items-center justify-center bg-white">
      <ThemedText>Home</ThemedText>
    </ThemedView>
  );
}


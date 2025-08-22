import { Text, TouchableOpacity } from "react-native";

interface Props {
  text: string
  onPress?: () => void
}

export default function ButtonPrimary({ text, onPress }: Props) {
  return (
    <TouchableOpacity className="bg-[#4dbf00] py-3 rounded-xl" onPress={onPress}>
      <Text className="text-dark-view text-base text-center">{text}</Text>
    </TouchableOpacity>
  )
}
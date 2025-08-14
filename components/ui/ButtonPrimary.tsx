import { Text, TouchableOpacity } from "react-native";

interface Props {
  text: string
}

export default function ButtonPrimary({ text }: Props) {
  return (
    <TouchableOpacity className="bg-[#4dbf00] py-3 rounded-xl">
      <Text className="text-dark-view text-base text-center">{text}</Text>
    </TouchableOpacity>
  )
}
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";

interface Props {
  text: string
}

export default function ButtonGoogle({ text }: Props) {
  return (
    <TouchableOpacity className="flex-row items-center justify-center gap-2 py-3 rounded-2xl bg-white ios:shadow-lg ios:shadow-black"
    style={Platform.select({
      ios: { shadowOffset: { width: 0, height: 20 }, shadowRadius: 32, shadowOpacity: 0.2 },
      android: { elevation: 12 },
    })}>
      <View>
        <Image 
          source={require("../../assets/images/google-icon.png")}
          className="w-6 h-6 mx-auto"
        />
      </View>
      <View>
        <Text className="text-dark-view text-base text-center">{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
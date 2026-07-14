import { Image } from "expo-image";
import { Text, View } from "react-native";

const carImage =
  "https://images.pexels.com/photos/14114785/pexels-photo-14114785.jpeg?auto=compress&cs=tinysrgb&w=1400";

export default function Index() {
  return (
    <View className="flex-1 justify-center gap-4 bg-gray-900 p-6">
      <Text className="text-3xl font-bold text-white">Car Preview</Text>

      <View className="overflow-hidden rounded-2xl bg-gray-800">
        <Image
          accessibilityLabel="Black BMW sedan parked beside a concrete wall"
          contentFit="cover"
          source={carImage}
          style={{ height: 280, width: "100%" }}
          transition={500}
        />
      </View>

      <Text className="text-base leading-6 text-gray-300">
        Image rendered with Expo Image for better loading and display support.
      </Text>
    </View>
  );
}

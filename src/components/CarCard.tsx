import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

type CarCardProps = {
  name: string;
  year: number;
  price: string;
  image: string;
  isSelected?: boolean;
  onPress?: () => void;
};

export default function CarCard({
  name,
  year,
  price,
  image,
  isSelected,
  onPress,
}: CarCardProps) {
  return (
    <Pressable onPress={onPress} className="mr-4 w-64">
      <View
        className={`overflow-hidden rounded-2xl ${isSelected ? "border-2 border-blue-500 bg-gray-700" : "bg-gray-800"}`}
      >
        <Image
          source={image}
          style={{ height: 150, width: "100%" }}
          contentFit="cover"
          transition={300}
        />
        <View className="p-4">
          <Text className="text-lg font-semibold text-white">{name}</Text>
          <View className="mt-1 flex-row items-center justify-between">
            <Text className="text-sm text-gray-400">{year}</Text>
            <Text className="text-sm font-bold text-blue-400">{price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

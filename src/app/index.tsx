import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CarCard from "@/components/CarCard";

// hero banner - wide angle shot
const heroImg =
  "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260";

const cars = [
  {
    id: "1",
    name: "Porsche 911 GT3",
    year: 2024,
    price: "$169,700",
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
    hp: "502",
    accel: "3.2s",
    topSpeed: "197 mph",
    engine: "4.0L Flat-6",
  },
  {
    id: "2",
    name: "BMW M4 Competition",
    year: 2024,
    price: "$74,900",
    image:
      "https://images.pexels.com/photos/14114785/pexels-photo-14114785.jpeg?auto=compress&cs=tinysrgb&w=600",
    hp: "523",
    accel: "3.4s",
    topSpeed: "180 mph",
    engine: "3.0L Twin-Turbo I6",
  },
  {
    id: "3",
    name: "Mercedes-AMG GT",
    year: 2023,
    price: "$130,900",
    image:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
    hp: "577",
    accel: "3.1s",
    topSpeed: "199 mph",
    engine: "4.0L V8 Biturbo",
  },
  {
    id: "4",
    name: "Audi RS7 Sportback",
    year: 2024,
    price: "$128,000",
    image:
      "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
    hp: "621",
    accel: "3.3s",
    topSpeed: "190 mph",
    engine: "4.0L V8 TFSI",
  },
  {
    id: "5",
    name: "Lamborghini Huracán",
    year: 2023,
    price: "$208,571",
    image:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
    hp: "631",
    accel: "2.9s",
    topSpeed: "202 mph",
    engine: "5.2L V10",
  },
];

export default function Index() {
  const insets = useSafeAreaInsets();
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  return (
    <ScrollView
      className="flex-1 bg-gray-900"
      showsVerticalScrollIndicator={false}
    >
      {/* ====== Hero Section ====== */}
      <View className="relative">
        <Image
          source={heroImg}
          style={{ height: 440, width: "100%" }}
          contentFit="cover"
          transition={600}
        />

        {/* dark overlay at the bottom so text is readable */}
        <View
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 200, backgroundColor: "rgba(17,24,39,0.85)" }}
        />

        {/* top bar */}
        <View
          className="absolute left-0 right-0 flex-row items-center justify-between px-6"
          style={{ top: insets.top + 8 }}
        >
          <Text className="text-xl font-bold text-white">CarShow</Text>
          <Pressable className="rounded-full bg-white/20 px-4 py-2 active:bg-white/30">
            <Text className="text-sm font-medium text-white">Sign In</Text>
          </Pressable>
        </View>

        {/* hero text */}
        <View className="absolute bottom-0 left-0 right-0 p-6 pb-8">
          <Animated.Text
            entering={FadeInUp.duration(600).delay(200)}
            className="text-xs font-semibold uppercase tracking-widest text-blue-400"
          >
            Premium Collection
          </Animated.Text>
          <Animated.Text
            entering={FadeInUp.duration(600).delay(350)}
            className="mt-2 text-4xl font-bold leading-tight text-white"
          >
            Find Your{"\n"}Dream Car
          </Animated.Text>
          <Animated.View entering={FadeInUp.duration(600).delay(500)}>
            <Pressable className="mt-5 self-start rounded-full bg-blue-500 px-7 py-3 active:opacity-80">
              <Text className="text-sm font-semibold text-white">
                Browse Collection
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>

      {/* ====== Featured Cars ====== */}
      <View className="mt-8 px-6">
        <Text className="text-xl font-bold text-white">Featured Cars</Text>
        <Text className="mt-1 text-sm text-gray-400">
          Tap a car to see its specs
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 16 }}
      >
        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            year={car.year}
            price={car.price}
            image={car.image}
            isSelected={car.id === selectedCar.id}
            onPress={() => setSelectedCar(car)}
          />
        ))}
      </ScrollView>

      {/* ====== Specs Panel ====== */}
      <Animated.View
        entering={FadeInDown.duration(500)}
        className="mx-6 mt-2 rounded-2xl bg-gray-800 p-6"
      >
        <Text className="text-lg font-bold text-white">
          {selectedCar.name}
        </Text>
        <Text className="mb-5 mt-1 text-sm text-gray-400">
          {selectedCar.year} · Performance Specs
        </Text>

        <View className="flex-row flex-wrap">
          {/* hp */}
          <View className="mb-4 w-1/2">
            <Text className="text-xs uppercase tracking-wide text-gray-500">
              Horsepower
            </Text>
            <Text className="mt-1 text-2xl font-bold text-white">
              {selectedCar.hp}
            </Text>
          </View>

          {/* 0-60 */}
          <View className="mb-4 w-1/2">
            <Text className="text-xs uppercase tracking-wide text-gray-500">
              0–60 mph
            </Text>
            <Text className="mt-1 text-2xl font-bold text-white">
              {selectedCar.accel}
            </Text>
          </View>

          {/* top speed */}
          <View className="mb-4 w-1/2">
            <Text className="text-xs uppercase tracking-wide text-gray-500">
              Top Speed
            </Text>
            <Text className="mt-1 text-2xl font-bold text-white">
              {selectedCar.topSpeed}
            </Text>
          </View>

          {/* engine */}
          <View className="mb-4 w-1/2">
            <Text className="text-xs uppercase tracking-wide text-gray-500">
              Engine
            </Text>
            <Text className="mt-1 text-xl font-bold text-white">
              {selectedCar.engine}
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* ====== Bottom CTA ====== */}
      <View className="mx-6 mb-12 mt-8 items-center rounded-2xl bg-blue-600 p-8">
        <Text className="text-center text-2xl font-bold text-white">
          Ready to Drive?
        </Text>
        <Text className="mt-2 text-center text-sm leading-5 text-blue-100">
          Schedule a test drive today and experience{"\n"}the thrill firsthand.
        </Text>
        <Pressable className="mt-6 rounded-full bg-white px-8 py-3 active:opacity-80">
          <Text className="text-sm font-semibold text-blue-600">
            Book Test Drive
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

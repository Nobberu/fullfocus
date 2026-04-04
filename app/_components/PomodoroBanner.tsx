import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import SquircleWrapper from "@/components/shared/SquircleWrapper";

export default function PomodoroBanner() {
  return (
    <SquircleWrapper className="mt-2.5 h-[130px] overflow-hidden rounded-[35px]" cornerSmoothing={1}>
      <LinearGradient
        colors={["#0D1513", "#0B2C24", "#79837E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.6, 1]}
        className="flex-1 flex-row items-center justify-between px-[26px]"
      >
        <View>
          <Text className="mb-1.5 font-['InterMedium'] text-[34px] leading-[34px] tracking-[-1.87px] text-white/70">
            Pomodoro
          </Text>
          <Text className="w-[200px] font-['InterMedium'] text-[12px] leading-[16px] tracking-[-0.66px] text-white/70">
            Work for 25 minutes, take a 5-minute break. After 4 cycles, take
            15-30 break.
          </Text>
        </View>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.55)",
            "rgba(255, 255, 255, 0.06)",
            "rgba(255, 255, 255, 0.06)",
            "rgba(255, 255, 255, 0.06)",
            "rgba(255, 255, 255, 0.06)",
            "rgba(255, 255, 255, 0.06)",
            "rgba(255, 255, 255, 0.45)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-full p-[1.25px]">
          <View className="rounded-full bg-[#1F3831] px-9 py-4">
            <Text className="font-['InterMedium'] text-[16px] leading-[16px] text-white/70">
              Start
            </Text>
          </View>
        </LinearGradient>
      </LinearGradient>
    </SquircleWrapper>
  );
}
import { Link } from "expo-router";
import "../../global.css";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind"
const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind RIGO....!
      </Text>
      <Link href="/onboarding" className="mt-4 bg-primary text-white p-4 rounded-2xl">Go to Onboarding</Link>
      <Link href="/otherPAgeToTest" className="mt-4 bg-primary text-white p-4 rounded-2xl">Go to Other page to test</Link>
      <Link href="/(auth)/sign-in" className="mt-4 bg-primary text-white p-4 rounded-2xl">Go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 bg-primary text-white p-4 rounded-2xl">Go to Sign Up</Link>

      <Link href="/subscriptions/spotify" className="mt-4 bg-primary text-white p-4 rounded-2xl">Go to Subscriptions spotify</Link>
      <Link href={{
        pathname: "/subscriptions/[id]", 
        params: {id: "apple"}
      }} className="mt-4 bg-primary text-white p-4 rounded-2xl">Go to Apple Subscriptions</Link>


    </SafeAreaView>
  );
}
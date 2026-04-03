import { Text } from 'react-native'

import { Link } from 'expo-router'

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind"
const SafeAreaView = styled(RNSafeAreaView)

const signIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>signIn PAGE</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </SafeAreaView>
  )
}

export default signIn
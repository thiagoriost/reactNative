import { Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind"
const SafeAreaView = styled(RNSafeAreaView)

const SubscriptionsDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>subscriptions Details: {id}</Text>
      <Link href="/" className="mt-4 bg-primary text-white p-4 rounded-2xl">Go back ... </Link>
    </SafeAreaView>
  )
}

export default SubscriptionsDetails
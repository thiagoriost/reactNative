import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionsDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>subscriptions Details: {id}</Text>
      <Link href="/" className="mt-4 bg-primary text-white p-4 rounded-2xl">Go back ... </Link>
    </View>
  )
}

export default SubscriptionsDetails
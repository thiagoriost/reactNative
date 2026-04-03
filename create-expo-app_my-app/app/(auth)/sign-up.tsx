import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View>
      <Text className='mb-1'>signUp PAGE</Text>
      <Link href="/(auth)/sign-in">Sign In</Link>     
      {/* // got to index.tsx */}
      <Link href="/">Go to Home</Link>
    </View>
  )
}

export default signUp
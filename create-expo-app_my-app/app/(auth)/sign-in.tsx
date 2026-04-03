import { View, Text } from 'react-native'

import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View>
      <Text>signIn PAGE</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </View>
  )
}

export default signIn
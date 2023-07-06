import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from './navigation/stack'

// React Native web  corresponding tags
// https://reactnative.dev/docs/intro-react-native-components#core-components

export default function App() {
  return (
    <NavigationContainer>
    <HomeStack></HomeStack>
    </NavigationContainer>
  );
}

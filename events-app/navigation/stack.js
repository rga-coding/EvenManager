import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home-screen";
import EventDetailScreen from "../screens/event-detail-screen";
import { navOptions } from "./option";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "../screens/profiles/profiles-screen";
import ProfileDetailScreen from "../screens/profiles/profile-detail-screen";

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
    screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
    screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name="Profiles" component={ProfileScreen} />
      <Stack.Screen name="Profile" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
};


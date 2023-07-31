import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EventDetailScreen from "../screens/event-detail-screen";
import ProfileDetailScreen from "../screens/profiles/profile-detail-screen";
import ProfileScreen from "../screens/profiles/profiles-screen";
import { navOptions } from "./option";
import { HomeTabs } from "./tab";

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
    screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name="Home" component={HomeTabs} />
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


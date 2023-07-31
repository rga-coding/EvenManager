import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Image, Linking, SafeAreaView, View } from "react-native";
import { HomeStack, ProfileStack } from "./stack";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView
            style={{ flex: 1, paddingTop: 20, backgroundColor: "#99f6e4" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 140,
              }}
            >
              <Image
                style={{ width: 100, resizeMode: "contain", marginTop: 20 }}
                source={require("../assets/images/logos/logo.png")}
              ></Image>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="More info"
              onPress={() => Linking.openURL("https://google.com")}
              icon={() => (
                <Ionicons name="information" size={22} />
              )}
            />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        options={{
          title: "Home",
          headerShown: false,
          drawerIcon: () => <Ionicons name="home" size={22} />,
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name="ProfileStack"
        options={{
          title: "Profiles",
          drawerIcon: () => <MaterialCommunityIcons name="face-man-profile" size={22} />,
         }}
        component={ProfileStack}
      />
    </Drawer.Navigator>
  );
};

import { useNavigation } from "@react-navigation/native";
import { Button, View, Text } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profiles screen</Text>
      <Button
        title="some profile"
        onPress={() => navigation.navigate("Profile", { profileId: 1 })}
      ></Button>
    </View>
  );
};

export default ProfileScreen;

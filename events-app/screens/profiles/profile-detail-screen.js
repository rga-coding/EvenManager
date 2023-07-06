import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ProfileDetailScreen = () => {
  const route = useRoute();
  const { profileId } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  return (
    <View>
      <Text>Profile id: {profileId}</Text>
    </View>
  );
};


export default ProfileDetailScreen;

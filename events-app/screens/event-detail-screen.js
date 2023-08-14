import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

const EventDetailScreen = () => {
  const route = useRoute();
  const { eventId, name, description } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 20 }}>
        This is the event detail screen for {eventId}
      </Text>
      <Text style={{ fontSize: 14 }}>{name}</Text>
      <Text style={{ fontSize: 14 }}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default EventDetailScreen;

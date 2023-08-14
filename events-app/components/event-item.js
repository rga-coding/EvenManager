import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";

const EventItem = ({ id, name, description, qrCode }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Event", { eventId: id, name, description })
      }
    >
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: qrCode }}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: "#c5c5c5",
    borderRadius: 10,
    marginVertical: 5,
    padding: 30,
  },
});

export default EventItem;

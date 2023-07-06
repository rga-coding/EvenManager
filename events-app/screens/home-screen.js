import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import EventList from "../components/event-list";

const HomeScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <EventList />
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomeScreen;

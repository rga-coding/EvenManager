import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import EventList from "../components/event-list";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const navigation = useNavigation();

  const handleRefresh = () => {
    console.log("refreshing...");
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    fetchData();
    // add refresh to the dependency array => if fetch refresh changes do fetchData
  }, [refresh]);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/events/");
    const data = await response.json();
    setData(data);
  };

  return (
    <View style={styles.screen}>
      <Button
        onPress={() => navigation.navigate("New Event")}
        title="add new event"
      />
      <EventList data={data} onRefresh={handleRefresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default HomeScreen;

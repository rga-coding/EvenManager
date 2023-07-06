import { FlatList, RefreshControl, View } from "react-native";
import { DUMMY_DATA } from "../data/data";
import EventItem from "./event-item";

// ReactNative: it's better to use FlatList then to use map (looping)

const EventList = () => {
  const renderItem = ({ item }) => {
    return (
      <EventItem
        id={item.id}
        title={item.title}
        description={item.description}
      ></EventItem>
    );
  };
  return (
    <View>
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => console.log("refreshing..")}
          />
        }
      ></FlatList>
    </View>
  );
};

export default EventList;

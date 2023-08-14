import { FlatList, RefreshControl, View } from "react-native";
import EventItem from "./event-item";

// ReactNative: it's better to use FlatList then to use map (looping)

const EventList = ({ data, onRefresh }) => {
  const renderItem = ({ item }) => {
    return (
      <EventItem
        id={item.id}
        name={item.name}
        description={item.description}
        qrCode={item.qr_code}
      ></EventItem>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
      ></FlatList>
    </View>
  );
};

export default EventList;

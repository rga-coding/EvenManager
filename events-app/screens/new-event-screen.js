import { useState } from "react";
import { Button, StyleSheet, TextInput, View, useLayoutEffect, Text } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const NewEventScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [alert, setAlert] = useState({
    isVisible: false,
    msg: "",
  })

//   const navigation = useNavigation();
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: 'add new event',
//       headerLeft: () => (
//         <HeaderBackButton
//           tintColor="white"
//           onPress={() => navigation.goBack()}
//         />
//       ),
//     });
//   }, [])

  const handleAddEvent = async () => {
    const d = date.toISOString().slice(0, 10);
    console.log(d);

    const data = {
      name,
      description,
      date: d,
    }

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(data)
    console.log('##################')
    console.log(JSON.stringify(data))
    console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")

    const response = await fetch("http://127.0.0.1:8000/api/events/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const res = await response.json();
    console.log(res)
    setAlert({ isVisible: true, msg: "Event added" });
  };

  return (
    <View style={styles.screen}>
      {alert.isVisible && <Text>{alert.msg}</Text>}
      <TextInput
        value={name}
        onChange={setName}
        placeholder="name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChange={setDescription}
        placeholder="description"
        multiline={true}
        style={styles.input}
      />
      <TextInput
        value={date.toLocaleString()}
        onChange={setDate}
        style={styles.input}
      />
      <Button onPress={handleAddEvent} title="add " />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
});

export default NewEventScreen;

import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    width: "100%",
    padding: 16,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application 4</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;

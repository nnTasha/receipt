import { StyleSheet, Text } from "react-native";

export const Subtitle = ({ children }) => {
  return <Text style={styles.subTitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    padding: 6,
    color: "#e2b497",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    textAlign: "center",
  },
});

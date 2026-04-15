import { Text, View, StyleSheet } from "react-native";

export const List = ({ data }) => {
  return data.map((item, index) => {
    return (
      <View key={index} style={styles.listItem}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#e2b497",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 4,
  },
  itemText: {
    color: "#351401",
    fontSize: 16,
    textAlign: "center",
  },
});

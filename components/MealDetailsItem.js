import { View, Text, StyleSheet } from "react-native";

export const MealDetailsItem = ({ meal, textStyle }) => {
  const { duration, complexity, affordability } = meal;
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration} m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
  },
});

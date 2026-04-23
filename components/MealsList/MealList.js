import { FlatList, View, StyleSheet } from "react-native";
import { MealItem } from "./MealItem";

export const MealList = ({ displayedMeals, pressHandler }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem {...item} onPress={() => pressHandler(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

import { MealList } from "components/MealsList/MealList";
import { MEALS } from "data/dummy-data";
import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { FavoritesContext } from "store/context/favorites-context";

export const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // @ts-ignore
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id),
    favoriteMealsIds.includes(meal.id),
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList displayedMeals={favoriteMeals} pressHandler={() => {}} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

import { List } from "components/MealDetail/List";
import { Subtitle } from "components/MealDetail/Subtitle";
import { MealDetailsItem } from "components/MealDetailsItem";
import { MEALS } from "data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "components/IconButton";
import { FavoritesContext } from "store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "store/redux/favorite";

export const MealDetailsScreen = ({ route }) => {
  const { mealId } = route.params;
  const navigation = useNavigation();
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, mealIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetailsItem meal={selectedMeal} textStyle={styles.detailText} />
      <Subtitle>Ingredients:</Subtitle>
      <View style={styles.listContainer}>
        <List data={selectedMeal?.ingredients} />
        <Subtitle>Steps:</Subtitle>
        <List data={selectedMeal?.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#FFF",
  },
  detailText: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 4,
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
});

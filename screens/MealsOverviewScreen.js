import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

export const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const pressHandler = (item) => {
    navigation.navigate("MealDetails", { mealId: item.id });
  };

  return (
    <MealsList displayedMeals={displayedMeals} pressHandler={pressHandler} />
  );
};

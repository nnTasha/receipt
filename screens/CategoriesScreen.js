import { CategoryGridTitle } from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

export const CategoriesScreen = ({ navigation }) => {
  const numColumns = 2;

  const pressHandler = (item) => {
    navigation.navigate("MealsOverview", { categoryId: item.id });
  };

  return (
    <FlatList
      key={`categories-${numColumns}`}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTitle
          title={item.title}
          color={item.color}
          onPress={() => pressHandler(item)}
        />
      )}
      numColumns={numColumns}
    />
  );
};

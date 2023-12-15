// import { useContext } from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";
// import { FavoritesContext } from "../store/context/favorites-context";
import {favoritesSlice} from "../store/redux/favorites";

function FavoritesScreen() {
  //const favoriteMealsProvider = useContext(FavoritesContext);
  const favoriteMealsProvider = useSelector((state) => state.favoriteMeals);

  const displayedMeals = MEALS.filter((meal) =>
    favoriteMealsProvider.ids.includes(meal.id)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={displayedMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

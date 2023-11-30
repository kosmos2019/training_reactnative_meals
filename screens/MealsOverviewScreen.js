import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categorieId;

  const displayedMeal = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  });

  return (
    <View style={styles.container}>
      <Text>Meals Overviews Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

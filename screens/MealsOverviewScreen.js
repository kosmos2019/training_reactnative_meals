import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categorySelected = CATEGORIES.find(
      (category) => category.id === catId
    );

    navigation.setOptions({ title: categorySelected.title });
  }, [catId, navigation]);
  
  return <MealList items={displayedMeals} />
}

export default MealsOverviewScreen;

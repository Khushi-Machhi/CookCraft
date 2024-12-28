// import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
// import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter( (mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >=0;
    } );

    // const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    // navigation.setOptions({
    //     title: categoryTitle
    // });      error

    // error solved
    useLayoutEffect( () =>{
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation] );

    // function renderMealItem(itemData) {
    //     const i = itemData.item
    //     const mealItemProps = {
    //         id: i.id,
    //         title: i.title,
    //         imageUrl: i.imageUrl,
    //         duration: i.duration,
    //         complexity: i.complexity,
    //         affordability: i.affordability
    //     }
    //     return(
    //         <MealItem {...mealItemProps} />
    //     );
    // }

    // return <View style={styles.container}>
    //     <FlatList 
    //     data={displayedMeals} 
    //     keyExtractor={ (item) => item.id }
    //     renderItem={renderMealItem}
    //      />
    // </View>

    return <MealsList items={displayedMeals} />
};

export default MealsOverviewScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16
//     }
// });
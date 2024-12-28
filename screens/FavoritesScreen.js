import MealsList from "../components/MealsList";
import { useContext } from "react";
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

function FavoritesScreen() {

    const favoriteMealsctx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsctx.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return(
            <View style={styles.container}>
                <Text style={styles.txt}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return(
        <MealsList items={favoriteMeals} />
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
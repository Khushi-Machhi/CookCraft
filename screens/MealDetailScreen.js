import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {

    const favoriteMealCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find( (meal) => meal.id === mealId );

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

    function changefavoriteStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealCtx.removeFavorite(mealId);
        } else {
            favoriteMealCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect( () =>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    icon = {mealIsFavorite ? 'star' : 'star-outline'}
                    onPress={changefavoriteStatusHandler}
                />
            }
        });
    }, [navigation, changefavoriteStatusHandler] );

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetails 
            
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            
            />

            <Text style={styles.heading}>Ingredients</Text>
                <View style={styles.box}>
                    {selectedMeal.ingredients.map( (ingredient) => (
                        <Text key={ingredient}>{ingredient}</Text>
                    ) )}
                </View>
            
            <Text style={styles.heading}>Steps</Text>
                <View style={styles.box}>
                    {selectedMeal.steps.map( (step) => (
                        <Text key={step}>{step}</Text>
                    ) )}
                </View>

        </View>
    )
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    img: {
        width: '100%',
        height: 350,
        borderWidth: 2,
        borderColor: 'rgb(20, 19, 18)',
        borderRadius: 16,
        elevation: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        borderBottomColor: ' rgb(63, 59, 56)',
        borderBottomWidth: 2
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(50, 46, 43)',
        marginVertical: 8,
    },
    box: {
        fontSize: 14,
        borderWidth: 1,
        borderBlockColor: 'rgb(63, 59, 56)',
        padding: 16,
        backgroundColor: 'rgb(119, 113, 109)',
    }
});
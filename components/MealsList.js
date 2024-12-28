import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";

function MealsList({ items }) {
    function renderMealItem(itemData) {
        const i = itemData.item
        const mealItemProps = {
            id: i.id,
            title: i.title,
            imageUrl: i.imageUrl,
            duration: i.duration,
            complexity: i.complexity,
            affordability: i.affordability
        }
        return(
            <MealItem {...mealItemProps} />
        );
    }

    return <View style={styles.container}>
        <FlatList 
        data={items} 
        keyExtractor={ (item) => item.id }
        renderItem={renderMealItem}
         />
    </View>
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

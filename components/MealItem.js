import { View, Pressable, Text, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from './MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    function selectMealItemHandler(){
        navigation.navigate("Meal Detail",{mealId: id});
    }

    return(
    <View style={styles.mealItem}>
        <Pressable 
            android_ripple={{ color: '#ccc' }}
            style={ ({ pressed }) => (pressed ? styles.btnPressed : null)}
            onPress={selectMealItemHandler}
        ><View style={styles.inner}>
            <View>
                <Image source={{ uri: imageUrl }} style={styles.img} />
                <Text style={styles.title} >{title}</Text>
            </View>
            <MealDetails 
                duration={duration}
                complexity={complexity}
                affordability={affordability}
            />
        </View></Pressable>
    </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    inner: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: 200,
    },
    btnPressed:{
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
});
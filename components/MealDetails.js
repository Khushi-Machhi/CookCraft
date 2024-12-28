import { View, Text, StyleSheet } from "react-native";


function MealDetails({ duration, complexity, affordability }) {
    return(
        <View style={styles.detalis}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
};

export default MealDetails;

const styles = StyleSheet.create({
    detalis: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
});
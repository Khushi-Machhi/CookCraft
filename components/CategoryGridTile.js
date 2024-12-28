import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}) {
    
    return <View style={styles.gridItem}>
        <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={ ({ pressed }) => [styles.btn, pressed ? styles.btnPressed : null,
        ] }
        onPress={onPress}
        >
            <View style={[ styles.innerContainer, {backgroundColor: color} ]}>
                <Text style={styles.txt}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,  //only for android
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        // overflow: 'hidden' //only for android  
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible'
    },
    btn:{
        flex: 1
    },
    btnPressed:{
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
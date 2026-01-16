import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headline}>Currency Converter</Text>
            <Text style={styles.subHeadline}>Lorem Ipsum is simply dummy text of the printing.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        alignItems: "center",
        paddingHorizontal: 69,
        paddingVertical: 50,
        gap: 5,
    },
    
    headline: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#1F2261",
    },

    subHeadline: {
        textAlign: "center",
        fontSize: 16,
        color: "#808080",
    }
})
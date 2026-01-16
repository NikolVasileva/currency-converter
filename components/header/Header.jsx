import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headline}>Currency Converter</Text>
            <Text style={styles.subHeadline}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        alignItems: "center",
        gap: 10,
        width: "100%",
    },
    
    headline: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1F2261",
        paddingVertical: 50,
        paddingHorizontal: 69,
    },

    subHeadline: {
        textAlign: "center",
    }
})
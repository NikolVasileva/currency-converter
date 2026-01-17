import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Calculator() {
    return (
        <View style={calculator.calculatorContainer}>
            <View style={calculator.item}>
                <View style={calculator.box}>
                    <Text style={{
                        fontSize: 15,
                        color: "#989898",
                        paddingBottom: 15,
                    }}>
                        Currency
                    </Text>
                    <View style={{flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center"}}>
                        <Image source={{
                            uri: 'https://pixelmedia.bg/wp-content/uploads/2016/05/eu-flag-300x197.jpg'
                        }}
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 50,
                            }} />
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#26278D"
                        }}>
                            EUR
                        </Text>
                    </View>
                </View>
                <TextInput placeholder="Test"
                    style={{
                        paddingHorizontal: 10,
                        backgroundColor: "#EFEFEF",
                    }} />
            </View>
        </View>
    )
}

const calculator = StyleSheet.create({
    calculatorContainer: {
        padding: 16,
        backgroundColor: '#ffffff',
        marginHorizontal: 25,
        marginBottom: 20,
        borderRadius: 10,
    },
    item: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
    },
    box: {
        // alignItems: 'center',
    }
})
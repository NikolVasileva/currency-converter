import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Calculator() {
    return (
        <View style={calculator.calculatorContainer}>
            <View style={calculator.item}>
                <Text style={{
                    fontSize: 15,
                    color: "#989898",
                    paddingBottom: 15,
                }}>
                    Currency
                </Text>
                <View style={calculator.box}>
                    <View style={calculator.curency}>
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
                        <TextInput placeholder="Test" style={calculator.input}/>
                    </View>
                </View>
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
        flexDirection: "column",
        gap: 10,
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    curency: {
        flexDirection: "row", 
        gap: 10, 
        alignItems: "center"
    },
    input: {
        paddingHorizontal: 20,
        backgroundColor: "#EFEFEF",
        flex: 1,
        height: 45,
        flexDirection: "row",
    },
})
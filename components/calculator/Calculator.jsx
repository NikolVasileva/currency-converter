import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Calculator() {
    return (
        <View style={calculator.calculatorContainer}>
            <View style={calculator.item}>
                <View style={calculator.box}>
                    <Text style={{
                        fontSize: 15, 
                        color:"#989898",
                        paddingBottom: 10,
                        }}>
                            Currency
                    </Text>
                    <Image source={{ 
                        uri: 'https://pixelmedia.bg/wp-content/uploads/2016/05/eu-flag-300x197.jpg' 
                    }}
                        style={{ width: 50, height: 50 }} />
                    <Text style={{
                        fontSize: 20, 
                        fontWeight: "bold", 
                        color: "#26278D"}}>
                            EUR
                    </Text>
                </View>
                <TextInput placeholder="Test"
                style={{
                    padding: 10,
                    backgroundColor: "#EFEFEF",
                }}/>
            </View>
        </View>
    )
}

const calculator = StyleSheet.create({
    calculatorContainer: {
        padding: 16,
        backgroundColor: '#f2f2f2',
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
import { Image, TextInput, View, Text } from "react-native";
import { calculator } from "../../styles/calculator.js"

export default function CalculatorItemEur() {
    return (
        <>
            <Text style={{
                fontSize: 15,
                color: "#989898",
                paddingBottom: 15,
            }}>
                Currency
            </Text>
            <View style={[calculator.box]}>
                <View style={[calculator.curency]}>
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
                <TextInput placeholder="100" keyboardType="numbers-and-punctuation" style={[calculator.input]} />
            </View>
        </>
    )
}
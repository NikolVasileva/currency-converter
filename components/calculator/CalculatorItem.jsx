import { Image, TextInput, View, Text } from "react-native";
import { calculator } from "../../styles/calculator.js"

export default function CalculatorItem() {
    return(
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
        <TextInput placeholder="100" keyboardType="number-pad" style={[calculator.input]} />
    </View>
    )
}
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import CalculatorItemEur from "./CalculatorItemEur.jsx";
import CalculatorItemBgn from "./CalculatorItemBgn.jsx";
import { calculator } from "../../styles/calculator.js"

export default function Calculator() {
    return (
        <View style={[calculator.calculatorContainer]}>
            <View style={[calculator.item]}>
            <Text style={{
                fontSize: 15,
                color: "#989898",
                paddingBottom: 15,
            }}>
                Currency
            </Text>

                <CalculatorItemEur />

                <Text style={{
                fontSize: 15,
                color: "#989898",
                paddingBottom: 15,
            }}>
                Converted Amount
            </Text>
                <CalculatorItemBgn />
            </View>
        </View>

    )
}

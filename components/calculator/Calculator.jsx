import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import CalculatorItemEur from "./CalculatorItemEur.jsx";
import CalculatorItemBgn from "./CalculatorItemBgn.jsx";
import { calculator } from "../../styles/calculator.js"

export default function Calculator() {
    return (
        <View style={[calculator.calculatorContainer]}>
            <View style={[calculator.item]}>
                <CalculatorItemEur />
                <CalculatorItemBgn />
            </View>
        </View>

    )
}

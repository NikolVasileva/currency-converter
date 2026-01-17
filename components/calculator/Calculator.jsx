import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { calculator } from "../../styles/calculator.js"
import CalculatorItem from "./CalculatorItem.jsx";

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
                <CalculatorItem />
            </View>
        </View>
    )
}

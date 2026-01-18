import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import CalculatorItemEur from "./CalculatorItemEur.jsx";
import CalculatorItemBgn from "./CalculatorItemBgn.jsx";
import { calculator } from "../../styles/calculator.js"
import SwitcherItem from "./SwitcherItem.jsx";

export default function Calculator() {
    return (
        <View style={[calculator.calculatorContainer]}>
            <View style={[calculator.item]}>
                <Text style={{
                    fontSize: 15,
                    color: "#989898",
                    paddingBottom: 5,
                }}>
                    Currency
                </Text>

                <CalculatorItemEur />

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 40,
                }}>
                    <SwitcherItem />
                </View>

                <Text style={{
                    fontSize: 15,
                    color: "#989898",
                    paddingBottom: 5,
                }}>
                    Converted Amount
                </Text>

                <CalculatorItemBgn />

            </View>
        </View>

    )
}

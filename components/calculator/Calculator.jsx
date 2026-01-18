import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import CalculatorItemEur from "./CalculatorItemEur.jsx";
import CalculatorItemBgn from "./CalculatorItemBgn.jsx";
import { calculator } from "../../styles/calculator.js"
import SwitcherItem from "./SwitcherItem.jsx";
import { useState } from "react";

export default function Calculator() {
    const [isSwitch, setIsSwitch] = useState(false);

    const handleSwitch = () => {
        setIsSwitch(state => !state);
    }

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

                {isSwitch ? <CalculatorItemEur/> : <CalculatorItemBgn />}

                <SwitcherItem onPress={handleSwitch}/>

                <Text style={{
                    fontSize: 15,
                    color: "#989898",
                    paddingBottom: 5,
                }}>
                    Converted Amount
                </Text>
                
                {isSwitch ? <CalculatorItemBgn/> : <CalculatorItemEur />}

            </View>
        </View>

    )
}

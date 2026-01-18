import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import CalculatorItemEur from "./CalculatorItemEur.jsx";
import CalculatorItemBgn from "./CalculatorItemBgn.jsx";
import { calculator } from "../../styles/calculator.js"
import SwitcherItem from "./SwitcherItem.jsx";
import { useState } from "react";

export default function Calculator({
    isSwitch,
    onSwap
}) {
    
    const [fromAmount, setFromAmount] = useState("");
    const [toAmount, setToAmount] = useState("");

    const exchangeRates = {
        EUR: 1.96,
        BGN: 0.51,
    }

    const handleFromAmountToChange = (value) => {
        setFromAmount(value);
    
        const valueToNumber = parseFloat(value);
    
        if(isNaN(valueToNumber)) {
          setToAmount("")
          return
        }
    
        if(isSwitch) {
          setToAmount((valueToNumber * exchangeRates.EUR).toFixed(2))
        } else {
          setToAmount((valueToNumber * exchangeRates.BGN).toFixed(2))
        }
    }

  // Swap to the currencies
  const handleSwap = () => {
    const temp = fromAmount;
    setFromAmount(toAmount);
    setToAmount(temp);

    if (onSwap) {
        onSwap(); 
    } 
  };

    // const handleSwap = () => {
    //     const newIsSwitch = isSwitch;
    //     const newFromAmount = toAmount;
    //     const numericValue = parseFloat(toAmount);
    
    //     setFromAmount(toAmount);
    
    //     if (isNaN(numericValue)) {
    //         setToAmount("");
    //     } else {
    //         if (newIsSwitch) {
    //             setToAmount((numericValue * exchangeRates.BGN).toFixed(2));
    //         } else {
    //             setToAmount((numericValue * exchangeRates.EUR).toFixed(2));
    //         }
    //     }
    
    //     if(onSwap) onSwap();
    // }

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

                {isSwitch ? 
                   <CalculatorItemEur 
                   value={fromAmount}
                   onChange={handleFromAmountToChange}
                   /> : 
                   <CalculatorItemBgn 
                   value={fromAmount}
                   onChange={handleFromAmountToChange}
                   />}

                <SwitcherItem onPress={handleSwap}/>

                <Text style={{
                    fontSize: 15,
                    color: "#989898",
                    paddingBottom: 5,
                }}>
                    Converted Amount
                </Text>

                {isSwitch ? <CalculatorItemBgn value={toAmount}/> : <CalculatorItemEur value={toAmount}/>}

            </View>
        </View>

    )
}

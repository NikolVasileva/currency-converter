import { Image, Text, TextInput, View } from "react-native"
import { calculator } from "../../styles/calculator.js"

export default function CalculatorItemBgn({
    value,
    onChange
}) {
    return (
        <View style={[calculator.box]}>
            <View style={[calculator.curency]}>
                <Image source={{
                    uri: 'https://thumbs.dreamstime.com/b/bulgaria-coat-arms-bulgarian-flag-eu-bulgaria-coat-arms-bulgarian-flag-vector-illustration-140464682.jpg'
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
                    BGN
                </Text>
            </View>
            <TextInput 
               placeholder="0" 
               keyboardType="numbers-and-punctuation" 
               style={[calculator.input]} 
               value={value}
               onChangeText={onChange}
            />
        </View>
    )
}
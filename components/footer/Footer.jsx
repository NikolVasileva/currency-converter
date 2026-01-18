import { Text, View } from "react-native";

export default function Footer({
    baseCurrency
}) {
    const rate = {
        EUR: "1 EUR = 1.96 BGN",
        BGN: "1 BGN = 0.51 EUR"
    }
    return(
        <View style={{
           paddingHorizontal: 28,
           paddingVertical: 15,
           }}>
            <Text style={{
                    fontSize: 15,
                    color: "#989898",
                    paddingBottom: 5,
                }}>Indicative Exchange Rate
            </Text>
            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
               }}>
                {rate[baseCurrency]}
            </Text>
        </View>
    )
}
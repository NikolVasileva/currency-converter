import { Text, View } from "react-native";

export default function Footer() {
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
                1 EUR = 1.96 BGN
            </Text>
        </View>
    )
}
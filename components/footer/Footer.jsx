import { Text, View } from "react-native";

export default function Footer() {
    return(
        <View>
            <Text style={{
                    fontSize: 15,
                    color: "#989898",
                    paddingBottom: 5,
                }}>Indicative Exchange Rate
            </Text>
            <Text>1 EUR = 1.96 BGN</Text>
        </View>
    )
}
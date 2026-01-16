import { Text, View } from "react-native";
import { styles } from "../../styles/header.js"

export default function Header() {
    return (
        <View style={[styles.header]}>
            <Text style={[styles.headline]}>Currency Converter</Text>
            <Text style={[styles.subHeadline]}>Lorem Ipsum is simply dummy text of the printing.</Text>
        </View>
    )
}

import { Image, View } from "react-native";

export default function SwitcherItem() {
    return (
        <View style={{
            backgroundColor: "#26278D",
            borderRadius: 50,
            width: 45,
            height: 45,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Image source={require("../../assets/switcher.png")}
                style={{
                    width: 15,
                    height: 20,
                }} 
            />
        </View>
    )
}
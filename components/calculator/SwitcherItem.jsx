import { Image, Pressable, View } from "react-native";

export default function SwitcherItem({
    onPress,
}) {
    return (
        <Pressable onPress={onPress}>
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 40,
                position: "relative",
                overflow: "visible",
            }}>
                <View style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#E7E7EE",

                }}>
                </View>
                <View style={{
                    backgroundColor: "#26278D",
                    borderRadius: 50,
                    width: 45,
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: -22,
                    zIndex: 10,
                    overflow: "visible",
                }}>
                    <Image source={require("../../assets/switcher.png")}
                        style={{
                            width: 15,
                            height: 20,
                        }}
                    />
                </View>
            </View>
        </Pressable>
    )
}
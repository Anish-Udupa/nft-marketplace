import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export function CircleButton({ imgURL, handlePress, ...props}){
    return (
        <TouchableOpacity 
            style={[circle_btn_styles.button, props]}
            onPress={handlePress}
        >
            <Image 
                source={imgURL} 
                resizeMode="contain"
                style={circle_btn_styles.img}
            />
        </TouchableOpacity>
    )
}

export function RectButton({ minWidth, fontSize, handlePress, ...props }){
    return (
        <TouchableOpacity 
            style={[rect_btn_styles.button,{ minWidth: minWidth, fontSize: fontSize }, props]}
            onPress={handlePress}
        >
            <Text style={[rect_btn_styles.text, {fontSize: fontSize}]}>Place a bid</Text>
        </TouchableOpacity>
    )
}

const circle_btn_styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
    },
    img: {
        width: 24,
        height: 24,
    }
});

const rect_btn_styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
    },
    text: {
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: "center",
    }
})
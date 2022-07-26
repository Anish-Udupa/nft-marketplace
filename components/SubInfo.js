import { Text, View, StyleSheet, Image } from "react-native";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";


export function NFTTitle({ title, subtitle, titleSize, subtitleSize }) {
    return (
        <View>
            <Text style={[styles.NFTTitle_title, { fontSize: titleSize }]}>{title}</Text>
            <Text style={[styles.NFTTitle_subtitle, { fontSize: subtitleSize }]}>{subtitle}</Text>
        </View>
    )
}

export function EthPrice({ price }) {
    return (
        <View style={styles.EthPrice_container}>
            <Image 
                source={assets.eth} 
                resizeMode="contain"
                style={styles.EthPrice_img}
            />
            <Text styles={styles.EthPrice_text}>{price}</Text>
        </View>
    )
}

export function ImageCmp({imgURL, index}) {
    return (
        <Image 
            source={imgURL}
            resizeMode="contain"
            style={[styles.ImageCmp, {marginLeft: index === 0 ? 0 : -SIZES.font}]}
        />
    )
}

export function People() {
    return (
        <View style={styles.People}>
            {[assets.person02, assets.person03, assets.person04].map((imgURL, index) => {
                return <ImageCmp key={index} imgURL={imgURL} index={index} />
            })}
        </View>
    )
}

export function EndDate() {
    return (
        <View style={styles.EndDate}>
            <Text style={styles.EndDate_Text1}>Ending In:</Text>
            <Text style={styles.EndDate_Text2}>12h 30m</Text>
        </View>
    )
}

export function SubInfo() {
    return (
        <View style={styles.SubInfo}>
            <People />
            <EndDate />
        </View>
    )
}

const styles = StyleSheet.create({
    SubInfo: {
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    People: {
        flexDirection: "row",
    },
    ImageCmp: {
        width: 48,
        height: 48,
    },
    EndDate: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
    },
    EndDate_Text1: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    EndDate_Text2: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
    },
    NFTTitle_title: {
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    },
    NFTTitle_subtitle: {
        fontFamily: FONTS.regular,
        color: COLORS.primary,
    },
    EthPrice_container: {
        flexDirection: "row",
        alignItems: "center",
    },
    EthPrice_img: {
        width: 20,
        height: 20,
        marginRight: 2,
    },
    EthPrice_text: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary,
    }
})

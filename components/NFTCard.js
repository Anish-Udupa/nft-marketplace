import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CircleButton, RectButton } from "./index";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";


function NFTCard ({data}){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={data.image} 
                    resizeMode="cover"
                    style={styles.img}
                />
                <CircleButton 
                    imgURL={assets.heart} 
                    top={10} 
                    right={10} 
                />
            </View>
            <SubInfo />
            <View style={styles.NFTTitle_container}>
                <NFTTitle
                    title={data.name} 
                    subtitle={data.creator} 
                    titleSize={SIZES.large} 
                    subtitleSize={SIZES.small}
                />
            </View>

            <View style={styles.EthPrice_container}>
                <EthPrice price={data.price} />
                <RectButton
                    minWidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Details", { data })}
                />
            </View>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
    },
    card: {
        width: "100%",
        height: 250,
    },
    img: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
    },
    NFTTitle_container: {
        width: "100%",
        padding: SIZES.font,
    },
    EthPrice_container: {
        marginTop: SIZES.font,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.medium,
        marginHorizontal: SIZES.medium,
    }
})

export default NFTCard;
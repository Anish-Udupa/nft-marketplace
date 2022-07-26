import { Text, View, Image, StyleSheet } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

function DetailsBid({ bid }) {
    return (
        <View style={styles.container}>
            <Image
                source={bid.image}
                resizeMode="contain"
                style={styles.img}
            />
            <View>
                <Text style={styles.bid_name}>
                    Bid placed by {bid.name}
                </Text>
                <Text style={styles.bid_date}>
                    {bid.date}
                </Text>
            </View>
            <EthPrice price={bid.price} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 1.5,
    },
    img: {
        width: 48,
        height: 48,
    },
    bid_name: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    bid_date: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 2,
        color: COLORS.secondary,
        marginTop: 3,
    }
})

export default DetailsBid;
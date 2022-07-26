import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import { EthPrice, NFTTitle } from "./SubInfo";

function DetailsDesc({ data }) {
    const [ text, setText ] = useState(data.description.slice(0, 100));
    const [ readMore, setReadMore ] = useState(false)
    return (
        <>
            <View style={styles.info_container}>
                <NFTTitle 
                    title={data.name} 
                    subtitle={data.creator} 
                    titleSize={SIZES.extraLarge}
                    subtitleSize={SIZES.font}
                />
                <EthPrice price={data.price} />
            </View>
            <View style={styles.desc_container}>
                <Text style={styles.desc_header}>Description</Text>
                <View style={styles.desc_text_container}>
                <Text style={styles.desc_text}>
                    {text}
                    {(!readMore && "...")}
                    <Text 
                        style={styles.read_more_text}
                        onPress={() => {
                            if (!readMore)
                                setText(data.description)
                            else
                                setText(data.description.slice(0, 100))
                            setReadMore(!readMore)
                        }}
                    >
                        {!readMore ? " Read More" : " Show Less"}
                    </Text>
                </Text>
                
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    info_container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    desc_container: {
        marginVertical: SIZES.extraLarge * 1.5,
    },
    desc_header: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    },
    desc_text_container: {
        marginTop: SIZES.base,
    },
    desc_text: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large,
    },
    read_more_text: {
        fontSize: SIZES.small,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    }
}) 

export default DetailsDesc;
import React from "react";
import { Text, View, SafeAreaView, Image, StatusBar, FlatList, StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from "../components";

function DetailsHeader({ data, navigation }) {
    return (
        <View style={header_styles.container}>
            <Image
                source={data.image}
                resizeMode="cover"
                style={header_styles.img}
            />
            <CircleButton
                imgURL={assets.left} 
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            <CircleButton
                imgURL={assets.heart} 
                right={15}
                top={StatusBar.currentHeight + 10}
            />
        </View>
    );
}

const header_styles = StyleSheet.create({
    container: { 
        width: "100%", 
        height: 373 
    },
    img: {
        width: "100%",
        height: "100%",
    },
})

function Details({ route, navigation }){
    const { data } = route.params;
    
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <FocusedStatusBar 
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.rectButtonContainer}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
            <FlatList 
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.FlatList}
                ListHeaderComponent={() => {
                    return(
                        <React.Fragment>
                            <DetailsHeader data={data} navigation={navigation} />
                            <SubInfo />
                            <View style={styles.details_desc_container}>
                                <DetailsDesc data={data} />
                                {data.bids.length > 0 && (
                                    <Text style={styles.bid_header}>
                                        Current Bid
                                    </Text>
                                )}
                            </View>
                        </React.Fragment>
                    );
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    rectButtonContainer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: 1,
    },
    FlatList: {
        paddingBottom: SIZES.extraLarge * 3,
    },
    details_desc_container: {
        padding: SIZES.font,
    },
    bid_header: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    }
})

export default Details;
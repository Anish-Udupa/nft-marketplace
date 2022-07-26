import { View, Image, TextInput, StyleSheet, Text } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

function HomeHeader({ onSearch }) {
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image 
                    source={assets.logo} 
                    resizeMode="contain"
                    style={styles.logo}
                />
                <View style={styles.profile_container}>
                    <Image 
                        source={assets.person01} 
                        resizeMode="contain"
                        style={styles.profile} 
                    />
                    <Image 
                        source={assets.badge} 
                        resizeMode="contain"
                        style={styles.badge} 
                    />
                </View>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.hellotext}>Hello, User 👋</Text>
                <Text style={[styles.findtext]}>Let's find a masterpiece</Text>
            </View>
            <View style={styles.search_view}>
                <View style={styles.search_container}>
                    <Image 
                        source={assets.search}
                        resizeMode="contain"
                        style={styles.search_img}
                    />
                    <TextInput
                        placeholder="Search NFTs"
                        style={styles.search}
                        onChangeText={onSearch}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
    },
    logo_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: 90,
        height: 25,
    },
    profile_container: {
        width: 45,
        height: 45,
    },
    profile: {
        width: "100%",
        height: "100%",
    },
    badge: {
        width: 20,
        height: 20,
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    text_container: {
        marginVertical: SIZES.font,
    },
    hellotext: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white,
    },
    findtext: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        marginTop: SIZES.base/2,
    },
    search_view: {
        marginTop: SIZES.font,
    },
    search_container: {
        width: "100%",
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
    },
    search_img: {
        width: 20,
        height: 20, 
        marginRight: SIZES.base,
    },
    search: {
        flex: 1,
    }
})

export default HomeHeader;
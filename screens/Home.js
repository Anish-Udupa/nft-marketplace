import { View, FlatList, Text, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components/index";


function Home() {

    const [ nftData, setNftData ] = useState(NFTData);

    const handleSearch = (value) => {
        if (!value)
            setNftData(NFTData);
        else{
            const filteredData = NFTData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
            setNftData(filteredData);
        }
    }

    return (
        <SafeAreaView style={styles.safeareaview}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={styles.flatlist_container}>
                <View style={{ zIndex: 0 }}></View>
                <FlatList 
                    data={nftData}
                    renderItem={({item}) => <NFTCard data={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                />
            </View>
            <View style={styles.background_container}>
                <View style={styles.background1} />
                <View style={styles.background2} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1
    },
    flatlist_container: {
        flex: 1
    },
    background_container: {
        position: "absolute",
        zIndex: -1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    background1: { 
        height: 350, 
        backgroundColor: COLORS.primary 
    },
    background2: { 
        flex: 1, 
        backgroundColor: COLORS.white 
    },
});

export default Home;
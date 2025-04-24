import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Pressable } from "react-native";
import Colors from "@/constants/colors";
import { IoCutSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, router } from "expo-router";
import colors from "@/constants/colors";

export default function Home() {
    // const profile = "https://picsum.photos/seed/696/3000/2000"
    // const banner = "/assets/baber/banner.png"
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <IoCutSharp style={styles.cutLogo} />
                    <Text style={styles.cutText} >SHOP</Text>
                </View>
                <Pressable style={styles.btnHeander}>
                    <GiHamburgerMenu size={30} color="white" />
                </Pressable>
            </View>
            <View style={styles.searchContainer}></View>
            <View style={styles.specialty}></View>

            <Image
                style={styles.image}
                source={require('../../assets/images/banner.png')}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    header: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1d1d1d"
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black"
    },
    cutLogo: {
        width: 40,
        height: 40,
        color: colors.purpleEspecial
    },
    cutText: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.purpleEspecial
    },
    btnHeander: {

    },
    searchContainer: {},
    specialty: {},
    image: {
        width: "100%",
        maxWidth: 500,
    }

})
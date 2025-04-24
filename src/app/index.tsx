import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Pressable, BackHandler } from "react-native";
import Colors from "@/constants/colors";
import { IoCutSharp } from "react-icons/io5";
import { GiHamburgerMenu, GiRazorBlade } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { TbMoustache } from "react-icons/tb";
import { Link, router } from "expo-router";
import colors from "@/constants/colors";
import React from "react";

export default function Home() {
    // const profile = "https://picsum.photos/seed/696/3000/2000"
    // const banner = "/assets/baber/banner.png"
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <IoCutSharp style={styles.cutLogo} />
                    <Text style={styles.cutText} >SHOP</Text>
                    <Text style={styles.cutText1} >BARBER</Text>
                </View>
                <Pressable style={styles.btnHeader}>
                    <GiHamburgerMenu size={30} color="white" />
                </Pressable>
            </View>

            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Olá, Giovanni!</Text>
                <Text style={styles.searchText1}>Qui, 24 de Abril</Text>
                <View style={styles.searchImputContainer}>
                    <TextInput style={styles.searchImput} placeholder="Buscar" placeholderTextColor="gray" />
                    <Pressable style={styles.btnSearch}>
                        <IoSearch size={30} color="white" />
                    </Pressable>
                </View>
            </View>

            <View style={styles.specialty}>
                <View style={styles.specialtyText}>
                    <IoCutSharp size={22} color="white" />
                    <Text style={styles.specialtyText1}>Cabelo</Text>
                </View>
                <View style={styles.specialtyText}>
                    <TbMoustache size={22} color="white" />
                    <Text style={styles.specialtyText1}>Barba</Text>
                </View>
                <View style={styles.specialtyText}>
                    <GiRazorBlade size={22} color="white" />
                    <Text style={styles.specialtyText1}>Acabamento</Text>
                </View>
            </View>

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
        alignItems: 'center',
        backgroundColor: Colors.black
    },
    header: {
        width: '100%',
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1d1d1d"
    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
    },
    cutLogo: {
        width: 30,
        height: 30,
        color: colors.purpleEspecial
    },
    cutText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.purpleEspecial
    },
    cutText1: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white
    },
    btnHeader: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.black
    },
    searchContainer: {
        width: "100%",
        padding: 20,
    },
    searchText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white
    },
    searchText1: {
        fontSize: 18,
        color: colors.white
    },
    searchImputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    searchImput: {
        width: "90%",
        padding: 12,
        borderRadius: 10,
        backgroundColor: colors.grayEspecial1
    },
    btnSearch: {
        padding: 6,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: colors.purpleEspecial
    },
    specialty: {
        padding: 20,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    specialtyText: {
        gap: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.grayEspecial1
    },
    specialtyText1: {
        paddingLeft: 5,
        fontSize: 12,
        fontWeight: "bold",
        color: colors.white,
    },
    image: {
        width: "92%",
        maxWidth: 500,
        borderRadius: 20,
        alignItems: 'center'
    }

})
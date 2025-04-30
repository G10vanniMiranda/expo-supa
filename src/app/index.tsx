import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, BackHandler, Image } from "react-native";
import Colors from "@/constants/colors";
import { IoCutSharp } from "react-icons/io5";
import { GiHamburgerMenu, GiRazorBlade } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { TbMoustache } from "react-icons/tb";
import { Link, router } from "expo-router";
import colors from "@/constants/colors";
import React from "react";
import CardItem from "./_components/cardItem";

export default function Home() {
    // const profile = "https://picsum.photos/seed/696/3000/2000"
    // const banner = "/assets/baber/banner.png"
    var imageUrl = "../../assets/images/banner.png"
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

            <Image source={require(`../../assets/images/barber/banner.png`)} style={styles.imageBanner} />

            <Text>Agendamentos</Text>

            <View style={styles.Card}>
                <View style={styles.CardItem}>
                    <CardItem title="Vintage Barber" address="asdfasdf" views="5,0"
                        image={<Image source={require(`../../assets/images/barber/cards/01.png`)} style={styles.image} />} />
                </View>

                <View style={styles.CardItem}>
                    <CardItem title="titulo" address="asdfasdf" views="4,7"
                        image={<Image source={require(`../../assets/images/barber/cards/19.png`)} style={styles.image} />} />
                </View>

                <View style={styles.CardItem}>
                    <CardItem title="titulo" address="asdfasdf" views="4,7"
                        image={<Image source={require(`../../assets/images/barber/cards/20.png`)} style={styles.image} />} />
                </View>

                <View style={styles.CardItem}>
                    <CardItem title="titulo" address="asdfasdf" views="4,7"
                        image={<Image source={require(`../../assets/images/barber/cards/02.png`)} style={styles.image} />} />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: Colors.black
    },
    header: {
        top: 0,
        position: "sticky",
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
        fontSize: 12,
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
        padding: 9,
        fontSize: 20,
        borderRadius: 10,
        letterSpacing: 2,
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
        letterSpacing: 1,
        color: colors.white,
    },
    image: {
        width: "100%",
        height: 160,
        maxWidth: 500,
        borderRadius: 20,
        alignItems: 'center'
    },
    imageBanner: {
        width: "90%",
        maxWidth: 500,
        paddingHorizontal: 20
    },
    Card: {
        gap: 10,
        height: 600,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 20,
        justifyContent: "space-around"
    },
    CardItem: {
        width: "45%",

    }

})
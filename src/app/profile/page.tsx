import colors from "@/constants/colors";
import { router } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Profile() {
    function handlePress() {
        alert('Botão Pressionado')
        let sair = confirm("Deseja sair?")
        if (sair) handleLogout()

    }

    function handleLogout() {
        alert('Logout')
        router.push('/')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} src="https://github.com/G10vanniMiranda.png" alt="Avatar" />

                <Text style={styles.avatarText}>Profile</Text>

                <TouchableOpacity onPress={handlePress} style={{ backgroundColor: 'red', width: 25, height: 25, borderRadius: 7 }} >
                    <Ionicons name="exit-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>0

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 34,
        backgroundColor: colors.zinc
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.purpleEspecial,
    },
    avatarText: {
        fontSize: 16,
        color: '#fff',
    },
    button: {
        backgroundColor: colors.green,
        marginTop: 20,
        padding: 16,
        borderRadius: 10,
    },
    buttonText: {
        letterSpacing: 1,
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',

    },

})
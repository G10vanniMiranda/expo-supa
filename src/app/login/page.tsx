import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import Colors from "@/constants/colors";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // mensagens
    const [EmailError, setEmailError] = useState('');
    const [EmailSucesso, setEmailSucesso] = useState('');
    const [SenhaError, setSenhaError] = useState('');
    const [SenhaSucesso, setSenhaSucesso] = useState('');

    const handleValidarEmail = () => {

        const emailAdmin = 'admin@gmail.com'
        const senhaAdmin = 'admin123'

        if (email === '') {
            setEmailError('Preencha o e-mail');
            return
        }

        if (email !== emailAdmin) {
            setEmailError('O e-mail está incorreto!');
            return
        }

        if (senha === '') {
            setEmailError('');
            setEmailSucesso('E-mail sucesso');
            setSenhaError('Preencha a senha');
            return
        }

        if (senha !== senhaAdmin) {
            setSenhaError('Senha está incorreta!');
            return
        }

        setSenhaError('');
        setSenhaSucesso('Senha sucesso');

        setTimeout(() => {
            router.push("/profile/page")
        }, 4000)
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.logoText}>
                    Logo <Text style={{ color: Colors.purpleEspecial, fontSize: 22 }}>Supa</Text>
                </Text>
                <Text style={styles.slogan}> React Expo Mobile </Text>
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.label}> E-mail </Text>
                    <TextInput style={styles.input}
                        value={email} onChangeText={setEmail}
                        placeholderTextColor={Colors.white}
                        placeholder="Digite seu e-mail" />
                    <Text style={{ color: Colors.redEspecial, fontSize: 16 }}>{EmailError}</Text>
                    <Text style={{ color: Colors.green, fontSize: 16 }}>{EmailSucesso}</Text>
                </View>

                <View>
                    <Text style={styles.label}> Senha </Text>
                    <TextInput style={styles.input}
                        value={senha} onChangeText={setSenha}
                        placeholderTextColor={Colors.white}
                        secureTextEntry placeholder="Digite sua senha" />
                    <Text style={{ color: Colors.redEspecial, fontSize: 16 }}>{SenhaError}</Text>
                    <Text style={{ color: Colors.green, fontSize: 16 }}>{SenhaSucesso}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleValidarEmail}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Link href="/cadastro/page" style={styles.link} >
                    <Text style={styles.linkText}>Ir para cadastro</Text>
                </Link>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 34,
        backgroundColor: Colors.zinc
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 50,
    },
    logoText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.grayEspecial3,
        marginBottom: 8
    },
    slogan: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.grayEspecial3,
        marginBottom: 8
    },
    form: {
        flex: 1,
        marginTop: 20,
        padding: 14,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    label: {
        color: Colors.blackEpecial,
        marginTop: 20,
        fontSize: 16,
    },
    input: {
        borderRadius: 10,
        fontSize: 16,
        paddingHorizontal: 16,
        height: 60,
        backgroundColor: Colors.purpleEspecial,
    },
    button: {
        backgroundColor: Colors.green,
        marginTop: 20,
        padding: 16,
        borderRadius: 10,
    },
    buttonText: {
        letterSpacing: 1,
        color: Colors.white,
        fontSize: 16,
        textAlign: 'center',

    },
    link: {
        width: '100%',
        marginTop: 20,
    },
    linkText: {
        fontSize: 18,
        color: Colors.green,
    }

})
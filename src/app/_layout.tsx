import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import { Feather } from "@expo/vector-icons"

export default function Layout() {
    return (
        <GestureHandlerRootView>
            <Drawer screenOptions={{
                headerShown: false,
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: "#ccc",

                drawerStyle: {
                    backgroundColor: "#1d1d1d",
                    width: "50%",
                }

            }}>
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: "Home",
                        drawerIcon: ({ color }) => (
                            <Feather name="home" size={24} color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="cadastro/page"
                    options={{
                        drawerLabel: "Cadastro",
                        drawerIcon: ({ color }) => (
                            <Feather name="user-plus" size={24} color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="login/page"
                    options={{
                        drawerLabel: "Login",
                        drawerIcon: ({ color }) => (
                            <Feather name="log-in" size={24} color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="profile/page"
                    options={{
                        drawerLabel: "Perfil",
                        drawerIcon: ({ color }) => (
                            <Feather name="user" size={24} color={color} />
                        )
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}
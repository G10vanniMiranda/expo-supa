import { View, Text, Pressable, StyleSheet } from "react-native";
import { FaStar } from "react-icons/fa";
import { Image } from "expo-image"
import colors from "@/constants/colors";

interface CardItemProps {
    image: React.ReactNode;
    title: string;
    address: string;
    views?: string;
}

// const CardItem = (props: CardItemProps) => {
const CardItem = ({ address, title, views, image }: CardItemProps) => {

    return (
        <View style={styles.cardItem}>
            <View style={styles.cardItemImage}>
                {image}
                <View style={styles.cardItemStar}>
                    <FaStar style={styles.itemStar} />
                    <Text style={{ color: colors.white }}>{views}</Text>
                </View>
            </View>

            <View style={styles.cardItemDescription}>
                <Text style={styles.cardItemTitulo}>{title}</Text>
                <Text style={styles.cardItemAdress}>{address}</Text>
            </View>

            <Pressable style={styles.btn} >
                <Text style={styles.btnText}>Reservar</Text>
            </Pressable>
        </View>
    );
}

export default CardItem;

const styles = StyleSheet.create({
    cardItem: {
        width: 160,
        height: 240,
    },
    cardItemImage: {
        width: 160,
        height: 120,
    },
    cardItemStar: {
        width: 60,
        top: 7,
        left: 5,
        padding: 6,
        borderRadius: 10,
        position: 'absolute',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
        backgroundColor: colors.purpleTransaparent1,
    },
    itemStar: {
        color: colors.purpleEspecial
    },
    cardItemDescription: {
        marginTop: 45,
    },
    cardItemTitulo: {
        fontSize: 18,
        color: colors.gray,
    },
    cardItemAdress: {
        color: colors.grayEspecial3
    },
    cardItemViews: {
        color: colors.grayEspecial3
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: colors.blackSecondary,

        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: colors.white
    }
})
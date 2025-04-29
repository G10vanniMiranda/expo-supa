import { View, Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image"
import colors from "@/constants/colors";

interface CardItemProps {
    image: React.ReactNode;
    title: string;
    address: string;
    views?: number;
}

// const CardItem = (props: CardItemProps) => {
const CardItem = ({ address, title, views, image }: CardItemProps) => {

    return (
        <View style={styles.cardItem}>
            <View style={styles.cardItemImage}>
                {image}
            </View>
            <Text style={styles.cardItemTitulo}>{title}</Text>
            <Text style={styles.cardItemAdress}>{address}</Text>
            <Text style={styles.cardItemViews}>{views}</Text>

            <Pressable>
                <Text>Reservar</Text>
            </Pressable>
        </View>
    );
}

export default CardItem;

const styles = StyleSheet.create({
    cardItem: {
        padding: 20,
    },
    cardItemImage: {
        width: 200,
    },
    cardItemTitulo: {
        color: colors.grayEspecial3
    },
    cardItemAdress: {
        color: colors.grayEspecial3
    },
    cardItemViews: {
        color: colors.grayEspecial3
    }
})
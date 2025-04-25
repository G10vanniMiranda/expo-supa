import { View, Image, Text, Pressable, StyleSheet } from "react-native";

interface CardItemProps {
    imageUrl: string;
    title: string;
    address: string;
    views?: number;
}

const CardItem = (props: CardItemProps) => {
    return (
        <View style={styles.cardItem}>
            {/* <Image source={{ uri: props.imageUrl }} /> */}
            <Image style={styles.cardItemImage} source={require(`${props.imageUrl}`)} />
            <Text style={styles.cardItemTitulo}>{props.title}</Text>
            <Text style={styles.cardItemAdress}>{props.address}</Text>
            <Text style={styles.cardItemViews}>{props.views}</Text>

            <Pressable>
                <Text>Reservar</Text>
            </Pressable>
        </View>
    );
}

export default CardItem;

const styles = StyleSheet.create({
    cardItem: {
    },
    cardItemImage: {

    },
    cardItemTitulo: {

    },
    cardItemAdress: {

    },
    cardItemViews: {

    }
})
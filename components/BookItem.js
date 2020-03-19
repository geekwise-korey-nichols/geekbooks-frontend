import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

const BookItem = props => {
    console.log('world')
    return (
        <View style={styles.bookItemContainer}>
            <Image style={styles.imageStyle} source={{uri: props.imgSrc}} />
            <Text style={styles.textStyles}>{props.bookTitle}</Text>
            <Text style={styles.textStyles}>{props.bookAuthor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 200,
    },
    textStyles: {
        fontSize: 15
    },
    bookItemContainer: {
        marginVertical: 15,
        alignItems: 'center',
        width: '50%'
    }
})

export default BookItem;
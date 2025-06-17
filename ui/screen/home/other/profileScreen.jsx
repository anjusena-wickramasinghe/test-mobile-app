import { View, Text, StyleSheet } from 'react-native';

export default function profileScreen() {
    return (
        <View style={styles.container}>
            <Text>profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
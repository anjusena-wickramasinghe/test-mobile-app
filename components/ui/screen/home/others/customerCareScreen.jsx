import { View, Text, StyleSheet } from 'react-native';

export default function customerCareScreen() {
    return (
        <View style={styles.container}>
            <Text>customer Care Screen</Text>
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

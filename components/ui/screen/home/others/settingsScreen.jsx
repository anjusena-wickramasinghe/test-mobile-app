import { View, Text, StyleSheet } from 'react-native';

export default function settingsScreen() {
    return (
        <View style={styles.container}>
            <Text>settings Screen</Text>
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
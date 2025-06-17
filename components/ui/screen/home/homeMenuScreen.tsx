import {View,Text,StyleSheet} from 'react-native';
import {Menu} from 'react-native-paper';
import { COLORS } from '@/constants/colorpallets';


export default function homeMenuScreen({navigation}:any){
    return(
        <View style={styles.container}>
           <Menu.Item leadingIcon="redo" onPress={() => navigation.navigate('MyOrder')} title="My order" />
    <Menu.Item leadingIcon="undo" onPress={() => {}} title="settings" />
    <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Vouchers"  />
    <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Daily Deals"  />
    <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Nortification" />
        <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Latest Products" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Profile" />
                <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Customer care" />
                    <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="logout" />
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.red
    }
})

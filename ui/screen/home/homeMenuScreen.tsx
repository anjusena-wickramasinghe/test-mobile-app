import{View,Text,StyleSheet}from 'react-native';
import { Menu } from 'react-native-paper';
import * as React from 'react';
import { COLORS } from '@/constants/colorpallets';

export default function homeMenuScreen({navigation}:any){
    return(
        <View style={styles.container}>
            <Menu.Item leadingIcon="redo" onPress={() => {navigation.navigate('myOrder')}} title="my order" />
    <Menu.Item leadingIcon="undo" onPress={() =>{navigation.navigate('settingsScreen')}} title="Setting" />
    <Menu.Item leadingIcon="content-cut" onPress={() => {navigation.navigate('vouchersScreen')}} title="Vouchers" />
    <Menu.Item leadingIcon="content-copy" onPress={() => {navigation.navigate('daillyDeal')}} title="Daily deals"  />
    <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('Nortification')}}title="Notifications" />
        <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('latestProduct')}} title="Latest Products" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('Profile')}} title="Profile" />
                <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('customerCare')}}  title="Costomer Care" />
                    <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('')}} title="Logout" />
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:COLORS.darkGray
    }
})
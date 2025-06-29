import { COLORS } from '@/constants/colorpallets';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput,Icon} from 'react-native-paper';
import axios from "axios"
import getBaseUrl from '@/constants/baseURL';


const logo = require('@/assets/images/images/logo.png');

export default function signupScreen({navigation}:any) {
    const[email, setEmail]=React.useState('');
    const[displayName, setDisplayName]=React.useState('');
    const[passwordDisplayState, setPasswordDisplayState]=React.useState('false');
    const[password, setpassword]=React.useState('');
   
const handleRegistor= async ()=>{
    try{
        const response= await axios.post(`${getBaseUrl()}users/create-user`,{
        username:email,
        displayName,
        password,
        roles: ['ADMIN'],
        isActive:false, 
    });

        if(response.status===201){
       navigation.navigate('signupverifyEmail',{email})
        }else{
            console.log(response.data)
        }
    }
    catch(e){
 console.log(e);
    }

}



    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
<Image source={logo}style={styles.logo }resizeMode={'contain'}/>

            </View>
            <View style = {styles.inputouter}>
<View style= {styles.forGroup}>

</View>
                 <TextInput
      label="Root Email"
      mode='outlined'
      value={email}
      onChangeText={text => setEmail(text)}
    />
    <View style= {styles.forGroup}></View>
<TextInput
      label="Password"
      mode='outlined'
      secureTextEntry={!passwordDisplayState}
      value={password}
      onChangeText={text => setpassword(text)}
      right={<TextInput.Icon onPress={()=>{
        setPasswordDisplayState(passwordDisplayState)

      }} size={20}icon={passwordDisplayState?'eye':'eye-off'}/> }
    />
    <View style= {styles.forGroup}>

</View>
                 <TextInput
      label="Display name"
      mode='outlined'
      value={displayName}
      onChangeText={text => setDisplayName(text)}
    />


<TouchableOpacity 
onPress={()=>handleRegistor()}
style={styles.loginButton}>

    <Text style={styles.loginText}>Register</Text>

</TouchableOpacity>


<Text style={styles.seperateText}>OR</Text>
        
<TouchableOpacity 
onPress={()=>navigation.navigate('Login')}
style={styles.emailButton}>
    <Text style={styles.loginText}>Already have an account?</Text>
</TouchableOpacity>
</View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    
    IconOuter:{
backgroundColor:COLORS.darkGray,
borderRadius:50,
marginBottom:30,
marginHorizontal:10,
height:50,
width:50,
alignItems:'center',
justifyContent:'center'

    },
    socialLoginWraper:{
flexDirection:'row',
marginTop:5,
justifyContent:'space-between',
marginHorizontal:1

    },
    seperateText:{
textAlign:'center',
marginTop:5
    },

    loginText:{
color:COLORS.darkGray,
fontSize:18,
fontWeight:'bold',

    },
    emailButton:{
backgroundColor:COLORS.red,
height:43,
width:300,
justifyContent:'center',
alignItems:'center',
borderRadius:10,
marginHorizontal:'auto',
marginTop:30
    },

    loginButton:{
        backgroundColor:COLORS.red,
        height:40,
        justifyContent:'center',
        marginHorizontal:'auto',
        width:150,
        marginBottom:20,
        marginTop:20,
        borderRadius:50,
        alignItems:'center'
    },

    forgotPasswordText:{
color:COLORS.primary,
textDecorationLine:'underline'
    },

    forgotPasswordButton:{
alignItems:'flex-end',
marginTop:10
    },

    forGroup:{
marginBottom:5,
    },

    inputouter:{
        marginTop:30,
    },

logo:{
width:140,
height:110

},

    logoWrapper:{
borderWidth:1,
alignItems: 'center',
marginTop: 5,
marginBottom:1,
backgroundColor:COLORS.red,
borderRadius:10,
padding:10,
    },


    container: {
        flex: 1,
        padding:10,
        
        
    }
});
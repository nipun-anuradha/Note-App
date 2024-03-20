import { useState } from "react";
import { Alert, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";


export function SignInUi({navigation}){

  const [getMobile,setMobile] = useState("");
  const [getPass,setPass] = useState("");

    const ui = (
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={true}/>
          <Text style={{fontSize: 24, fontWeight: "bold"}}>My Note Book</Text>
            <Image source={require("./appIcon.png")} style={{width: 200, height: 200}} />

          <View>

            <View style={styles.view1}>
                <Text style={styles.text2} >Mobile No </Text>
                <TextInput style={styles.input1} onChangeText={setMobile} autoCorrect={false} inputMode={'numeric'} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text2} >Password </Text>
                <TextInput style={styles.input1} onChangeText={setPass} autoCorrect={false} secureTextEntry={true} />
            </View>

          </View>
          
          <Pressable onPress={signIn}  >
            <Text style={styles.btn1} >Sign In</Text>
          </Pressable>
          <Pressable onPress={goToSignUp}  >
            <Text style={styles.btn2} >Create new account</Text>
          </Pressable>
    

        </SafeAreaView>
      );
    
    
      return ui;

      function signIn(){
        const loginDetails = {
          "mobile":getMobile,
          "pass":getPass
      };

      fetch("http://192.168.1.197/local/MyNotesApp/signInProcess.php",
        {
            method:"POST",
            body:JSON.stringify(loginDetails)
        }
        )
    
        .then(response=>{
            return response.text();
        })
    
        .then(value=>{
            if(value=="true"){
              navigation.navigate("Notes");
            }else{
              Alert.alert("Error", "User not found!");
            }
        })
    
        .catch(
            error=>{
                Alert.alert("Error", error);
            }
        )

      }

      function goToSignUp(){
        navigation.navigate("SignUp");
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text2:{
      fontSize: 16,
    },
    input1:{
      fontSize: 14,
      height: 35,
      width: 300,
      borderWidth: 1,
      padding: 5,
      marginStart: 10,
    },
    view1:{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 10,
    },
    btn1:{
        backgroundColor: '#d9023b',
        color: 'white',
        width: 300,
        height: 45,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        borderRadius: 10,
        paddingVertical: 10,

    },
    btn2:{
        width: 300,
        height: 45,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "red"

    },
  });
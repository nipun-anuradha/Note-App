import { useState } from "react";
import { Alert, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export function SignUpUi({navigation}){

  const [getFname,setFname] = useState("");
  const [getlname,setlname] = useState("");
  const [getMobile,setMobile] = useState("");
  const [getPass,setPass] = useState("");

    const ui = (
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={true}/>
          
            <Image source={require("./appIcon.png")} style={{width: 200, height: 200}} />

          <View>

            <View style={styles.view1}>
                <Text style={styles.text2} >First Name</Text>
                <TextInput style={styles.input1} onChangeText={setFname} autoCorrect={false} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text2} >Last Name</Text>
                <TextInput style={styles.input1} onChangeText={setlname} autoCorrect={false} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text2} >Mobile No </Text>
                <TextInput style={styles.input1} onChangeText={setMobile} autoCorrect={false} inputMode={'numeric'} />
            </View>

            <View style={styles.view1}>
                <Text style={styles.text2} >Password </Text>
                <TextInput style={styles.input1} onChangeText={setPass} autoCorrect={false} />
            </View>

          </View>
          
          <Pressable onPress={signUp}  >
            <Text style={styles.btn1} >Sign Up</Text>
          </Pressable>
          <Pressable onPress={goToSignIn}  >
            <Text style={styles.btn2} >Already have an account?</Text>
          </Pressable>
    

        </SafeAreaView>
      );
    
    
      return ui;

      function signUp(){
        const regDetails = {
          "fname":getFname,
          "lname":getlname,
          "mobile":getMobile,
          "pass":getPass
      };

      fetch("http://192.168.1.197/local/MyNotesApp/signUpProcess.php",
        {
            method:"POST",
            body:JSON.stringify(regDetails)
        }
        )
    
        .then(response=>{
            return response.text();
        })
    
        .then(value=>{
            if(value=="success"){
              navigation.navigate("SignIn");
            }else{
              Alert.alert("Error", value);
            }
        })
    
        .catch(
            error=>{
                Alert.alert("Error", error);
            }
        )

      }

      function goToSignIn(){
        navigation.navigate("SignIn");
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
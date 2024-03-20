import { useState } from "react";
import { Alert, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export function NewNoteUi({navigation}){
    const [getTitle,setTitle] = useState("");
    const [getNote,setNote] = useState("");

    const ui = (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true}/>
            
            <View style={{margin: 5}}>
                <View>
                    <Text style={styles.txt}>Title : </Text>
                    <TextInput style={styles.input1} onChangeText={setTitle} autoCorrect={false} />
                </View>

                <View >
                    <Text style={styles.txt}>Note : </Text>
                    <TextInput editable multiline numberOfLines={15} style={styles.input2} onChangeText={setNote} autoCorrect={false} />
                </View>


                <Pressable onPress={addNote} >
                    <Text style={styles.btn} >Add Note</Text>
                </Pressable>
            </View>


        </SafeAreaView>
      );
    
      function addNote(){
        const noteDetails = {
            "title":getTitle,
            "note":getNote
        };

        fetch("http://192.168.1.197/local/MyNotesApp/addNoteProcess.php",
        {
            method:"POST",
            body:JSON.stringify(noteDetails)
        }
        )
    
        .then(response=>{
            return response.text();
        })
    
        .then(value=>{
            if(value=="success"){
                Alert.alert("Message", "Note saved.");
                navigation.navigate("Notes");
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

      return ui;
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input1:{
        fontSize: 18,
        borderWidth: 1,
        padding: 5,
        backgroundColor: "#fcdeeb"
    },
    input2:{
        fontSize: 18,
        borderWidth: 1,
        padding: 5,
        textAlignVertical: 'top',
        backgroundColor: "#fcdeeb"
    },
    noteBox:{
        backgroundColor: '#D2E9E9',
        margin: 5,
        padding: 5,
        borderRadius: 6,
        
    },
    txt:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        backgroundColor: '#e8a2c1'
    },
    btn:{
        fontSize: 24,
        backgroundColor: '#d9023b',
        color: "white",
        textAlign: "center",
        padding: 10,
        marginTop: 50,
        borderRadius: 6,
    }
  });
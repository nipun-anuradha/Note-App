import { useIsFocused } from "@react-navigation/native";
import { Alert, FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

let data = [];
loadNotes();

export function HomeUi({navigation}){
    const ui = (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true}/>
            
            <View style={{flex: 10}} >
                <FlatList data={data} renderItem={ChatUi} />
            </View>

            <View style={{flex: 1}}>
                <Pressable style={styles.addBtn} onPress={()=>{navigation.navigate("New Note")}}>
                    <Image source={require("./addnote.png")} style={{width: 60, height: 60}} />
                </Pressable>
            </View>


        </SafeAreaView>
      );

    const isFocused = useIsFocused();
        if(isFocused == true){
            loadNotes();
    }
    
      return ui;
}

function ChatUi({ item }){

        const ui = (
            <View style={styles.noteBox}>
                <View>
                    <Image source={require("./notebook.png")} style={{width: 50, height: 50, marginEnd: 10}} />  
                </View>
                <View >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={{fontSize: 16,}}>{item.description}</Text>
                </View>
            </View>
        );
    
    
    return ui;
}


function loadNotes(){
    fetch("http://192.168.1.197/local/MyNotesApp/listNotes.php",
        {
            method:"POST",
            // body:JSON.stringify(regDetails)
        }
        )
    
        .then(response=>{
            return response.json();
        })
    
        .then(mainArray=>{
            data = mainArray;
        })
    
        .catch(
            error=>{
                Alert.alert("Error", error);
            }
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    addBtn:{
        alignItems: 'flex-end',
        marginEnd: 10,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',

    },
    noteBox:{
        backgroundColor: '#facae2',
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    }
  });
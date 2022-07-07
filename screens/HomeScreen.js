import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomListitem from '../componetns/CustomListitem'
import { ScrollView } from 'react-native-gesture-handler'
import { useLayoutEffect } from 'react'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { auth, db } from '../firebase'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'


const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([]);


    const signOutUser = () =>{
        auth.signOutUser().then(() =>{ 
            navigation.replace("Login");
        });
    };

    useEffect(() =>{
        const unsubscribe = db.collection('chats').onSnapshot(snapshot =>(
           setChats(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data(),
           }))) 
        ));  
        return unsubscribe;
    }, [])

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Signal" , 
            headerStyle: {backgroundColor: "#fff"},
            headerTitleStyle: {color: "black"},
            headerTintColor: "black",
            headerLeft: () =>{
                <View style={{marginLeft : 20}}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5} >
                        <Avatar rounded source={{ uri: auth?. currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            },
            headerRight: ()=> (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,

                    }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camera" size={24} color="black" />
                         
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> navigation.navigate("AddChat") } activeOpacity={0.5}>
                       <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>                    
                </View>
            )
        });
    }, [navigation]);

 
  
    return (
        <SafeAreaView>
            <ScrollView>
                {chats.map(({id, data:{ chatName } }) =>(
                   <CustomListitem key={id} id={id}  chatName={chatName} /> 
                ))}
                    
            </ScrollView>
        </SafeAreaView>
           
        
    )
} 

export default HomeScreen

const styles = StyleSheet.create({})
  
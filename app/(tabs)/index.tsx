import { Image,Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


import './../../firebaseConfig'; // Importa Firebase

import { getDatabase,get,child, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const database = getDatabase();
const auth = getAuth();
const dbRef = ref(database);



function writeUserData() {
  console.log("pasamos por real time database")
  const db = getDatabase();
  set(ref(db, 'users/' + "3"), {
    username: "larry1",
    email: "test1@test.com.ar",
  });
}

function readUserData(userId: string) {

  get(child(dbRef, `users`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      snapshot.val().map((task: any) => {
        console.log(task)
      });
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function createUser(email: string, password: string) {

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      console.log("esto anda usuarios")
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error, "<-este ya es el error")

      const errorCode = error.code;
      const errorMessage = error.message;
    });
};


export default function HomeScreen() {
  return (

    <View >
      <ScrollView>
        <View >
          
          <Button title='c' />
          <Button title='c' />
          <Button title='c' />
          <Button title='c' />
          <Button title='cargar real time database' onPress={() => { writeUserData() }} />
          <Button title='crear usuarios' onPress={() => { createUser("test3@test.com", "Larry1234") }} />
          <Button title='leer datos' onPress={() => { readUserData("1") }} />
        </View>
      </ScrollView>
    </View>

  );
}

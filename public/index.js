// var express = require('express');
// var app = express();
// const express = require("express");

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
    } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
    // import { initializeApp } from 'firebase/app';
import { initializeAnalytics , getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js';



    import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";




// const admin = require('firebase-admin');

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { initializeAnalytics,getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// import {getFirestore, collection, getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyDghAAvMSGvON4Lmd-jop0VyjOiAC5t8lM",
  authDomain: "smart-mobility-ios.firebaseapp.com",
  databaseURL: "https://smart-mobility-ios-default-rtdb.firebaseio.com",
  projectId: "smart-mobility-ios",
  storageBucket: "smart-mobility-ios.appspot.com",
  messagingSenderId: "727144855934",
  appId: "1:727144855934:web:2ca21a0d262114a85ddb2f",
  measurementId: "G-5SNWQ6NS22"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const database = getDatabase(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);  
const analytics = getAnalytics(app);


// init services
 const db = getFirestore()


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});



var email = document.getElementById('email').value;
 var password = document.getElementById('psw').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ... user.uid
              // save data into real time database
               set(ref(database, 'users/' + user.uid), {
                    email: email,
                    password: password
                })
                    .then(() => {
                        // Data saved successfully!
                        alert('user created successfully');
        
                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                    });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              alert(errorMessage);
          });


          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...

              // save log in details into real time database
              var lgDate = new Date();
              update(ref(database, 'users/' + user.uid), {
                  last_login: lgDate,
              })
                  .then(() => {
                      // Data saved successfully!
                      alert('user logged in successfully');

                  })
                  .catch((error) => {
                      // The write failed...
                      alert(error);
                  });
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage);
          });


          signOut(auth).then(() => {
            // Sign-out successful.
     }).catch((error) => {
         // An error happened.
     });



// // Login using email/password
// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value
//   const loginPassword = txtPassword.value

//   // step 1: try doing this w/o error handling, and then add try/catch
//   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

//   // step 2: add error handling
//   // try {
//   //   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   // }
//   // catch(error) {
//   //   console.log(`There was an error: ${error}`)
//   //   showLoginError(error)
//   // }
// }

// // Create new account using email/password
// const createAccount = async () => {
//   const email = txtEmail.value
//   const password = txtPassword.value

//   try {
//     await createUserWithEmailAndPassword(auth, email, password)
//   }
//   catch(error) {
//     console.log(`There was an error: ${error}`)
//     showLoginError(error)
//   } 
// }

// // Monitor auth state
// const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user)
//       showApp()
//       showLoginState(user)

//       hideLoginError()
//       hideLinkError()
//     }
//     else {
//       showLoginForm()
//       lblAuthState.innerHTML = `You're not logged in.`
//     }
//   })
// }

// // Log out
// const logout = async () => {
//   await signOut(auth);
// }

// btnLogin.addEventListener("click", loginEmailPassword) 
// btnSignup.addEventListener("click", createAccount)
// btnLogout.addEventListener("click", logout)

// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

// monitorAuthState();










// // // // initialize firebase
// // // firebase.initializeApp(firebaseConfig);

// // // reference your database
// // var contactFormDB = firebase.database().ref("contactForm");

// // document.getElementById("contactForm").addEventListener("submit", submitForm);

// // function submitForm(e) {
// //   e.preventDefault();

// //   var name = getElementVal("name");
// //   var emailid = getElementVal("emailid");
// //   var msgContent = getElementVal("msgContent");

// //   saveMessages(name, emailid, msgContent);

// //   //   enable alert
// //   document.querySelector(".alert").style.display = "block";

// //   //   remove the alert
// //   setTimeout(() => {
// //     document.querySelector(".alert").style.display = "none";
// //   }, 3000);

// //   //   reset the form
// //   document.getElementById("contactForm").reset();
// // }

// // const saveMessages = (name, emailid, msgContent) => {
// //   var newContactForm = contactFormDB.push();

// //   newContactForm.set({
// //     name: name,
// //     emailid: emailid,
// //     msgContent: msgContent,
// //   });
// // };

// // const getElementVal = (id) => {
// //   return document.getElementById(id).value;
// // };

// //   //signOut

// //   function signOut(){
// //     auth.signOut();
// //     alert("SignOut Successfully from System");
// //   }

// //   //active user to homepage
// //   firebase.auth().onAuthStateChanged((user)=>{
// //     if(user){
// //       var email = user.email;
// //       alert("Active user "+email);

// //     }else{
// //       alert("No Active user Found")
// //     }
// //   })






// // //init services
// // const db = getFirestore()

// // // collection reference

// // const colRef = collection(db, 'users')

// // // get collection

// // getDocs(colRef)
// //     .then((snapshot)  => {
// //         let users =  []
        
// //         snapshot.docs.forEach((doc)={
// //             users.push({...doc.data()})
// //         })
// //         console.log(users)
// //     })
// //         .catch(err =>{
// //             console.log(err.message)
// //      })





// // app.post('/create-user', (req, res) => {
// //     const {name, email, password, phoneno, location } = req.body;
// //     const auth = firebase.auth();
// //     auth.createUserWithEmailAndPassword(email, password)
// //         .then((user) => {
// //             firebase.firestore().collection("users").doc().set({
// //                 "name": name,
// //                 "email": email,
// //                 "phoneno": phoneno,
// //                 "address": address,
// //             })
// //             .then(() => {
// //                 res.send('User created successfully');
// //             });
// //         })
// //         .catch(err => {
// //             res.send(err);
// //         });
// // });


// // app.then((user) => {
// //     firebase.firestore().collection("users").doc().set({
// //         "name": name,
// //         "email": email,
// //         "phoneno": phoneno,
// //         "address": address,
// //     })
// //     .then(() => {
// //         res.send('User created successfully');
// //     });
// // })

// // var port = 3200;

// // app.listen(port, () => {
// //     console.log("🟢 server is up and running at " + port);
// // })
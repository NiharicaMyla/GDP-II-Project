const firebaseConfig = {
    apiKey: "AIzaSyDM5_rcmnXka5rf51VMIfQKth0Sfi9IHqk",
    authDomain: "gdpdemo-3d1d8.firebaseapp.com",
    databaseURL: "https://gdpdemo-3d1d8-default-rtdb.firebaseio.com",
    projectId: "gdpdemo-3d1d8",
    storageBucket: "gdpdemo-3d1d8.appspot.com",
    messagingSenderId: "1099045880816",
    appId: "1:1099045880816:web:2aac19a1c0529546ab1335",
    measurementId: "G-NSMNNJY95Z"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("mydemo");
  
  document.getElementById("mydemo").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("mydemo").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

// Get a database reference to our posts
const db = getDatabase();
const ref = db.ref('server/saving-data/fireblog/posts');

// Attach an asynchronous callback to read the data at our posts reference
ref.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 

// Retrieve new posts as they are added to our database
ref.on('child_added', (snapshot, prevChildKey) => {
  const newPost = snapshot.val();
  console.log('Author: ' + newPost.author);
  console.log('Title: ' + newPost.title);
  console.log('Previous Post ID: ' + prevChildKey);
});
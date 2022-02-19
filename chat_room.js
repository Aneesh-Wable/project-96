const firebaseConfig = {
    apiKey: "AIzaSyCDRRLttAEwVc6UHt5tnzcWC6-kaq1-HBQ",
    authDomain: "kwitter-db7d0.firebaseapp.com",
    databaseURL: "https://kwitter-db7d0-default-rtdb.firebaseio.com",
    projectId: "kwitter-db7d0",
    storageBucket: "kwitter-db7d0.appspot.com",
    messagingSenderId: "441834106455",
    appId: "1:441834106455:web:dc309896f43ef6f0bcbd12"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


   user_name = localStorage.getItem("Username");
   document.getElementById("user_name").innerHTML = "Welcome: "+ user_name;
   
   function addRoom()
   {
         room_name = document.getElementById("add_room").value;
         firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"  
         });

         localStorage.setItem("Room Name", room_name);
         window.location="kwitter_page.html";
   }

   function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("Room name" +name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem =("Username");
      localStorage.removeItem =("Room name");
      window.location = "home_page.html";
}
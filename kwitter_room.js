var firebaseConfig = {
      apiKey: "AIzaSyCT18NCQb7ZVd4_qwuSUGdjhAsXrD8KVhU",
      authDomain: "kwitter-bdb6e.firebaseapp.com",
      databaseURL: "https://kwitter-bdb6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-bdb6e",
      storageBucket: "kwitter-bdb6e.appspot.com",
      messagingSenderId: "805054150548",
      appId: "1:805054150548:web:2f070881e976e0036e8181"
    };
   
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names"+Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function RedirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logoutbutton(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
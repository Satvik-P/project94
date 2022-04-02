var firebaseConfig = {
    apiKey: "AIzaSyCkJd0tiR66R2ZbsRYkESa4mPrnNTN6Ss8",
    authDomain: "kwitter2-97db2.firebaseapp.com",
    projectId: "kwitter2-97db2",
    storageBucket: "kwitter2-97db2.appspot.com",
    messagingSenderId: "867984211380",
    appId: "1:867984211380:web:9e5403ae0a6810235f86e1"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      });});}
getData();

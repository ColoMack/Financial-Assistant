document.getElementById("login").onclick = function(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCred)=>{

        window.location.href = "dashboard.html"

    }).catch((error)=>{

    })

}
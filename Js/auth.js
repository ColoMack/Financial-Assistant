firebase.auth().onAuthStateChanged((user)=>{
    if(user){

        console.log("user is logged in")
    }else{
        window.location.href ="index.html";
    }
})
document.getElementById("submit").onclick = function(){

    var incomeType = document.getElementById("incomeType").value;
    var paymentMethod = document.getElementById("paymentMethod").value;
    var amount = document.getElementById("amount").value;
    var receivedBy = document.getElementById("receivedBy").value;
    var timeStamp = new Date();

    var addIncome = firebase.firestore().collection("income").doc();
    addIncome.set({

        docId:addIncome.id,
        timeStamp:timeStamp,
        incomeType:incomeType,
        paymentMethod:paymentMethod,
        amount:amount,
        receivedBy:receivedBy

    }).then(()=>{
        window.location.reload();
    })
}


// Read income
firebase.firestore().collection("income").get().then((querySnapshot)=>{
    var content = '';
    querySnapshot.forEach((doc)=>{
        var incomeType = doc.data().incomeType;
        var paymentMethod = doc.data().paymentMethod;
        var amount = doc.data().amount;
        var receivedBy = doc.data().receivedBy;
        var timeStamp = doc.data().timeStamp;
        var docId = doc.data().docId;

        content += '<tr>';
            content+= '<td>'+incomeType+'</td>';
            content+= '<td>'+paymentMethod+'</td>';
            content+= '<td> Ksh. '+amount+'</td>';
            content+= '<td>'+receivedBy+'</td>';
            content+= '<td><button class="btn btn-success">Edit</button></td>';
            content+= '<td><button onclick="deleteDoc(\'' + docId + '\')" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button></td>';
        content += '</tr>';

    })
    $("#incomeList").append(content);
})

//run a function tha allows us to get the doc id on click of the button
window.deleteDoc = function(docId){
    console.log(docId)

    document.getElementById("btnDeleteRecord").onclick = function(){

        firebase.firestore().collection("income").doc(docId).delete().then(()=>{
            window.location.href = "income.html"
        })
    }
}






///deleting data

//var getDocId = decodeURIComponent(window.location.search);
//var deleteRecordId = getDocId.substring(1);




var now = moment().format('MMMM Do YYYY');
$("#currentDay").text(now);
console.log(now);



// let userTodo = {
//     Todo: ""
// }

function saveData(){
 var userInput = $("#9am-timeblock");
 if(userInput != ""){
     $("#9am-timeblock").text(userInput);
 }
localStorage.setItem("userInput", JSON.stringify(userInput));
let userData = localStorage.getItem("userInput");
console.log(userData);
}


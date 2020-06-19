

var now = moment().format('MMMM Do YYYY');
$("#currentDay").text(now);




// let userTodo = {
//     Todo: ""
// }

function saveData() {
    var nineAmInput = $("#9am-timeblock-text").val();

    localStorage.setItem("userInput", nineAmInput);
    var savedInputNineAm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputNineAm);


    var tenAmInput = $("#10am-timeblock-text").val();
    localStorage.setItem("userInput", tenAmInput);
    var savedInputTenAm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputTenAm);

    var elevenAmInput = $("#11am-timeblock-text").val();
    localStorage.setItem("userInput", elevenAmInput);
    var savedInputElevenAm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputElevenAm);

    var twelvePmInput = $("#12pm-timeblock-text").val();
    localStorage.setItem("userInput", twelvePmInput);
    var savedInputTwelvePm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputTwelvePm);


    var onePmInput = $("#1pm-timeblock-text").val();
    localStorage.setItem("userInput", onePmInput);
    var savedInputOnePm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputOnePm);


    var twoPmInput = $("#2pm-timeblock-text").val();
    localStorage.setItem("userInput", twoPmInput);
    var savedInputTwoPm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputTwoPm);


    var threePmInput = $("#3pm-timeblock-text").val();
    localStorage.setItem("userInput", threePmInput);
    var savedInputThreePm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputThreePm);


    var fourPmInput = $("#4pm-timeblock-text").val();
    localStorage.setItem("userInput", fourPmInput);
    var savedInputFourPm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputFourPm);


    var fivePmInput = $("#5pm-timeblock-text").val();
    localStorage.setItem("userInput", fivePmInput);
    var savedInputFivePm = localStorage.getItem("userInput");
    console.log("SHOULD SAY HELLO: ", savedInputFivePm);












    //  if(userInput != ""){
    //      $("#9am-timeblock").text(userInput);
    //  }

}


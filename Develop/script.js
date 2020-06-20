

var now = moment().format('MMMM Do YYYY');
$("#currentDay").text(now);

window.onload = function(){
    // here we get the value from local storage on pageload by the id and write it to the correct timeblock.
    var nineAmRefresh = localStorage.getItem("9am-timeblock-text")
    $('#9am-timeblock-text').val(nineAmRefresh);

    var tenAmRefresh = localStorage.getItem("10am-timeblock-text")
    $('#10am-timeblock-text').val(tenAmRefresh);

    var elevenAmRefresh = localStorage.getItem("11am-timeblock-text")
    $('11am-timeblock-text').val(elevenAmRefresh);
    console.log(elevenAmRefresh)

    var TwelvePmRefresh = localStorage.getItem("12pm-timeblock-text")
    $('#12pm-timeblock-text').val(TwelvePmRefresh);

    var onePmRefresh = localStorage.getItem("1pm-timeblock-text")
    $('#1pm-timeblock-text').val(onePmRefresh);

    var twoPmRefresh = localStorage.getItem("2pm-timeblock-text")
    $('#2pm-timeblock-text').val(twoPmRefresh);

    var threePmRefresh = localStorage.getItem("3pm-timeblock-text")
    $('#3pm-timeblock-text').val(threePmRefresh);

    var fourPmRefresh = localStorage.getItem("4pm-timeblock-text")
    $('#4pm-timeblock-text').val(fourPmRefresh);

    var fivePmRefresh = localStorage.getItem("5pm-timeblock-text")
    $('#5pm-timeblock-text').val(fivePmRefresh);
}  
// saves data locally as userInput and saves the input
// we input an id (when clicked we pass an id of the corresponding timeblock)
function saveData(id) {
   
    var userInput = $("#"+id).val();
    localStorage.setItem(id, userInput);      
}
         



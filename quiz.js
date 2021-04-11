var result;
generate();
var array = [];
var i = 0;
var total=0;
var totalWrong = 0;
$("#next-button").on("click", function(){
  //once user clicks the next button, input box should be cleared
  $("#input-box").val("");

  // adding hidden class again to the orignal result and description
  $(".result").addClass("hidden");
  $(".description").addClass("hidden");

  //generating the new number for next question
  generate();



  // checking if the user has attempted 5n number of questions by checking if conditions
  if(array.length == 5){
    //increasing the total number to show it to user
    total = total + 5;
    // alert("good job!!\nYou have attempted " + total +  " questions");


    //showing the celebration image and text and hiding the body
    $("#celebration-image").removeClass("hidden");
    $(".celebration-text").removeClass("hidden");
    $(".celebration-text").text("YOU HAVE CORRECTLY ATTEMPTED " + total + " QUESTIONS");
    $(".wrong-questions").removeClass("hidden");
    $(".wrong-questions").text("AND " + totalWrong + " WRONG QUESTIONS");
    $("#quiz").addClass("hidden");

    //setting timeout of 3 seconds, after which the celebration image will disapper
    setTimeout(function(){
      $("#celebration-image").addClass("hidden");
      $(".celebration-text").addClass("hidden");
      $("#quiz").removeClass("hidden");
      $(".wrong-questions").addClass("hidden");
    }, 3000);
    array = [];
  }

});


var number1;
var number2;
var randomOperator;
function generate(){

  //generating two random numbers between 0 to 100
  number1 = Math.floor(Math.random()*100)+1;
  number2 = Math.floor(Math.random()*100)+1;

  //setting those numbers to respective places
    $(".number1").text(number1);
    $(".number2").text(number2);

    var  operatorArray = ["+", "-", "/", "*"];
    randomOperator = operatorArray[Math.floor(Math.random()*4)];
    $(".operator").text(randomOperator);


    //setting up the actual result

    if(randomOperator == "+"){
        result = number1 + number2;
        console.log(result);
        $(".result").text("Correct answer is " + result);
    }
    else if(randomOperator == "-"){
        result = number1 - number2;
        console.log(result);
        $(".result").text("Correct answer is " + result);
    }
    else if(randomOperator == "*"){
        result = number1 * number2;
        console.log(result);
        $(".result").text("Correct answer is " + result);
    }
    else if(randomOperator == "/"){
        result = Math.floor(number1/number2);
        console.log(result);
        $(".result").text("Correct answer is " + result);
    }


}

//adding event listener to show results when submit button is clicked
$(".submit-button").on("click", function(){

     //showing the value of actual result
     $(".result").removeClass("hidden");

     console.log(result);

     //fetching the user input
    var input = $("#input-box").val();

    console.log(input);




     //checking if user input equals to the correct input
     if(input == result){

       //if input is correct, then removing the hidden class from description and showing correct in description class
       $(".description").removeClass("hidden");
       $(".description").text("Your response : CORRECT");

       array.push(i+1);
     }
     else{
       totalWrong++;
       //if input is wrong, then removing the hidden class from description and showing wrong in description class
       $(".description").removeClass("hidden");
       $(".description").text("Your response : WRONG");

     }

});



// $('.carousel').carousel({
//   wrap: false
// }).on('slid.bs.carousel', function () {
//     curSlide = $('.active');
//   if (curSlide.is( ':last-child' )) {
//      $('.right').hide();
//      return;
//   } else {
//      $('.right').show();
//   }
// });



function exercise1 (arraynums) {
var sum = 0;
var len = arraynums.length;
arraynums.forEach(function (value) {
  sum = sum + value;
});
document.getElementById("ans").innerHTML = "The Average of array [" + arraynums +"] : " +sum/len;
}

function exercise2 (arraynums) {
  var ans2 = Math.max.apply(null, arraynums);
  document.getElementById("ans2").innerHTML = "The Max value from the array [" + arraynums +"] : " + ans2;
}

function exercise3 (arraynums){
  var ED = false;
  arraynums.forEach(function (values) {
    if(values % 2 == 0) {
       ED = true;
    }
  });
  document.getElementById("ans3").innerHTML = "One of the value in the array [" + arraynums +"] is even : " + ED;
}
 function exercise4 (arraynums)
 {
   var ED = false;
   var count = 0;
   var len = arraynums.length;
   arraynums.forEach(function (values) {
     if(values % 2 == 0) {
        count++;
     }
   });
   if(count == len)
   {
     ED = true;
   }
   document.getElementById("ans4").innerHTML = " Are all the elements in the array [" + arraynums +"] even ? : " + ED;
 }
 function arrayContains (arraystring, singlestring){
   var ED = false;
   arraystring.forEach(function (values) {
     if(values == singlestring) {
        ED= true;

     }
   });
   document.getElementById("ans5").innerHTML = ED;
 }
 function arrayContainsTwo (arraystring, singlestring){
   var ED = false;
   var count = 0;
   arraystring.forEach(function (values) {
     if(values == "a") {
       count++;
     }
   });
   if(count == 2) {
     ED = true;
   }
   document.getElementById("ans61").innerHTML = " Element "+ singlestring+" occurs twice in the array " +arraystring + " are: " + ED;
 }
 function arrayContainsThree (arraystring, singlestring){
   var ED = false;
   var count = 0;
   arraystring.forEach(function (values) {
     if(values == "a") {
       count++;
     }
   });
   if(count == 3) {
     ED = true;
   }
   document.getElementById("ans62").innerHTML = " Element "+ singlestring+" occurs thrice in the array " +arraystring + " are: " + ED;
 }
 function arrayContainsNTimes (arraystring, singlestring, n){
   var ED = false;
   var count = 0;
   arraystring.forEach(function (values) {
     if(values == "a") {
       count++;
     }
   });
   if(count == n) {
     ED = true;
   }
   document.getElementById("ans63").innerHTML = " Element "+ singlestring+" occurs "+ n +" times in the array " +arraystring + " are: " + ED;
 }
function max(arraynums){
  var ans2a = _.max(arraynums);
  document.getElementById("ans2a").innerHTML = "The Average of array [" + arraynums +"] : " + ans2a;
}
function arrayEven(numsarray){
  count = 0;
  ED = false;
  var ans = _.find(numsarray, function (value){if(value % 2 == 0) count++;});
  if(count > 0){
    ED = true;
    document.getElementById("arrayEven").innerHTML = " Are all the elements in the array [" + numsarray +"] even ? : " + ED;
  }
  else{
    document.getElementById("arrayEven").innerHTML = " Are all the elements in the array [" + numsarray +"] even ? : " + ED;
  }
}
function arrayWholeEven(numsarray){
  count = 0;
  ED = false;
  len = numsarray.length;
  var ans = _.find(numsarray, function (value){if(value % 2 == 0) count++;});
  if(count == len){
    ED = true;
    document.getElementById("arrayWholeEven").innerHTML = " Is the value of any element in the array [" + numsarray +"] even ? : " + ED;
  }
  else{
    document.getElementById("arrayWholeEven").innerHTML = " Is the value of any element in the array [" + numsarray +"] even ? : " + ED;
  }
}

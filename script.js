function myFunction() {
    var letter = document.getElementsByTagName('p').length; 
    var text;
    alert("There are " + letter + " 'p' elements on this page")
    }
    
function myFunction2() {
    var letter = document.querySelector("#firstDiv").childElementCount;
    document.getElementsByTagName("p").innerHTML = letter;
    alert("There are " + letter + " 'p' elements inside 'div1'")
    }

function myFunction3() {
    var letter = document.querySelector("#secondDiv").childElementCount; 
    document.getElementsByTagName('p').innerHTML = letter;
    alert("There are " + letter + " 'p' elements inside'div2'")
    }
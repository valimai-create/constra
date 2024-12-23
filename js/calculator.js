function add(){
    var a = document.getElementById("num1").value
    var b= document.getElementById("num2").value
    var c= Number(a)+Number(b);
    document.getElementById("view").innerHTML=c
} 
function sub(){
    var a = document.getElementById("num3").value
    var b= document.getElementById("num4").value
    var  c= Number(a )- Number (b) ;
    document.getElementById("view").innerHTML=c
}
function multiple(){
    var a = document.getElementById("num5").value
    var b= document.getElementById("num6").value
    var c = Number(a )* Number (b) ;
    document.getElementById("view").innerHTML=c
}
function divide(){
    var a = document.getElementById("num7").value
    var b= document.getElementById("num8").value
    var c = Number(a )/ Number (b) ;
    document.getElementById("view").innerHTML=c
}
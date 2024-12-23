function factor() {
    var i=document.getElementById("view").value
    var fact=Number(i);
    var j=fact-1
    while(j>=1){
        fact=fact*j
        j--;
    }
    document.write(fact);
}
function factorial() {
    var b=document.getElementById("value").value
    var c=Number(b)
    for(j=c-1;j>=1;j--){
        c=c*j
    }
    document.write(c);
}
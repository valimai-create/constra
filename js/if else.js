function check(){
    var a=document.getElementById("value").value;
    if(a > 0){
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }
    else if(a < 0){
        document.getElementById("result").innerHTML="Negative"
    }
}
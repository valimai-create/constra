function myfunction() {
    // let x = document.forms["name"]["fname"].value;
    // if(x==""){
    //     alert("Name must to be enter");
    //     return false;
    // }
    // let text = document.getElementsByTagName("p")[0].innerHTML=document.getElementsByTagName("h1")[0].innerHTML;
    // console.log (text);
}
// function validate(){
//     var x=document.myform.email.value;  
// var atposition=x.indexOf("@");  
// var dotposition=x.lastIndexOf(".");  
// if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//   return false;  
//   }  
// }
$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });

// $(document).ready(function(){
//     $(".btn1").click(function(){
//         alert("HTML: " + $(".test").html());
//     });
//     $(".btn2").click(function(){
//         alert("Text: "+ $(".test").text());
//     });
// });
// $(document).ready(function(){
//     $(".btn1").click(function(){
//         $(".test1").html("<b>Hello world!</b>");
//     })
//     $(".btn2").click(function(){
//         $(".test2").text("Hello World!");
//     })
//     $(".btn3").click(function(){
//         $(".test3").val("Dolly Dick");
//     })
// })
// $(document).ready(function(){
//     $(".btn1").click(function(){
//         $("p").append("<b>append</b>.");
//     })
//     $(".btn2").click(function(){
//         $("ol").append("<li>T-Shirts$32</li>");
//     })
//     $(".btn3").click(function(){
//         $("ol").append("<li>Belt$7</li>")
//     })
//     $(".btn4").click(function(){
//         $("ol").append("<li>Jacket$9.99</li>")
//     })
// })
$(document).ready(function() {
    $("p").click(function(){
        $("p").removeClass("para")
        $(this).addClass("para");    
   })
})
    
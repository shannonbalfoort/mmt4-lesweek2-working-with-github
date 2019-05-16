/*document.getElementById("btn").addEventListener('click', function(){
    this.style.color= "#ff0000";
    
});
*/

// 1 selector
// 2 functie
// 3 voorzie de functie van parameters

//$("body").fadeOut(20000);



$("#btn").click(function(){
    $(".thumb-cont a").animate({ "margin-top" : "100px" }, 5000);
    $("body").fadeOut(4000);
    
    $(this).html("Geklikt");
});
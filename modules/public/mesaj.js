$(document).ready(function () {

    $('.zorunlu').css("border", "3px solid red")
    $('input.zorunlu').css("color", "yellow")

    $('input').focus(function () {
        $(this).css("background-color", "red")
    });
    $('input').blur(function (){
        $(this).css("background-color", "transparent");
    } )

    $('#textArea1').focus(function(){
        $(this).css("background-color","red" );
    })
    $('#textArea1').blur(function(){
        $(this).css("background-color","transparent" );
    })
});
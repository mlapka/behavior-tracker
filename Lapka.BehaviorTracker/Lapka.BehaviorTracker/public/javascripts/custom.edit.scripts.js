$(document).ready(function () {
    
    $('.edit-button').click(function () {
        console.log($(this).attr("id"));
        console.log($(this).attr("value"));
        $('#btn-name').attr("value", $(this).attr("id"));
        $('#btn-value').attr("value", $(this).attr("value"));

        console.log($('#btn-name').attr("value"));
        console.log($('#btn-value').attr("value"));
    });


});

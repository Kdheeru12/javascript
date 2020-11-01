$(document).ready(function() {
    function f1() {
        $('#h0 ').fadeToggle(1000);
        //alert(document.getElementById('h0'))
    }

    $('.1').click(
        function() {
            $('#h').append('<p>hellop </p>')
        }
    )
    $('.2').click(
        function() {
            $('#h').after('<p>hellop </p>')
        }
    )
    $('.3').click(
        function() {
            $('#h').prepend('<p>hellop </p>')
        }
    )
    $('.4').click(
        function() {
            $('#h').before('<p>hellop </p>')
        }
    )
    $('.5').click(
        function() {
            $('#h').remove()
        }
    )
    $('.6').click(
        function() {
            $('#h').empty()
        }
    )




})
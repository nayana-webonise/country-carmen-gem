// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//
//$(document).ready(function() {
//
//    // #first_select is the id of our first select box, if the ajax request has been successful,
//    // an ajax:success event is triggered.
//
//    $('#first_select').live('ajax:success', function(evt, data, status, xhr) {
//        // get second selectbox by its id
//        var selectbox2 = $('#second_select');
//
//        // empty it
//        selectbox2.empty();
//
//        // we got a JSON array in data, iterate through it
//
//        $.each(data, function(index, value) {
//            // append an option
//            var opt = $('<option/>');
//
//            // value is an array: [:id, :name]
//            opt.attr('value', value[0]);
//            // set text
//            opt.text(value[1]);
//            // append to select
//            opt.appendTo(selectbox2);
//        });
//    });
//
//});


$(document).ready(function () {



    $('#user_country').change(function(event) {

        var country = 'country=' + $('#user_country :selected').text();
//        alert(country)
        $.get('/user/update_state_select?' + country, function(data){
            $("div#addressStates").html( "<script type='text/javascript'>" + data + "</script>" );
        })
        return false;
    })

    $('#user_cont').change(function(event) {

        var cont = 'country=' + $('#user_cont :selected').text();
//        alert(cont)
        $.get('/user/state_select?' + cont, function(data){
            $("div#address").html( "<script type='text/javascript'>" + data + "</script>" );
        })
        return false;
    })

    $('#addressStates').change(function(event) {

//        var country = 'country=' + $('#user_country :selected').text();
//        var state = 'state=' +  $('#user_state :selected').text() ;
//
//        alert(state)
//        alert(country)
//        $.post('/users/create?' + country + '?' + state , function(data){
//            $("div#address").html( "<script type='text/javascript'>" + data + "</script>" );
//        })
//        return false;


    })

    $('#country_submit').click(function(event){

//        alert("hi")
        var country1 =  $('#user_cont :selected').text();
        var state1 =  $('#user_state1 :selected').text() ;

//        alert(state1)
//        alert(country1)
        $.ajax({
            type: "POST",
            url: "user/saving",
            data: { country: country1, state: state1 }
        }).done(function( msg ) {
                alert( "Data Saved: " + msg );
            });
        alert("successfully saved!")
//        $.post('/user/saving?' + country + '?' + state  , function(data){
//
//        })
//        return false;
    })

    $('#carmen_submit').click(function(event){

//        alert("hi")
        var country =  $('#user_country :selected').text();
        var state =  $('#user_state :selected').text() ;

//        alert(state)
//        alert(country)
        $.ajax({
            type: "POST",
            url: "user/saving",
            data: { country: country, state: state }
        }).done(function( msg ) {
                alert( "Data Saved: " + msg );
            });
        alert("successfully saved!")

    })
});

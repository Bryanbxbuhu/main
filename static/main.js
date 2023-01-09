
$(document).ready(function(){
	$('#finalButton').click(function(){
    	$(location).attr("href","https://spothero.app.link/ts1p2NqSe1?$3p=a_hasoffers&$affiliate_json=http%3A%2F%2Ftracking.spothero.com%2Faff_c%3Foffer_id%3D1%26aff_id%3D1574%26format%3Djson"); // Put url to redirect
    });
});

/* This function detects the location selection of the client */
function myFunction() {
  var x = $("#myLocation").val();
  return x
}

/* This function detects the departing date selected by the client*/
function departChecker(){
/* Here,How can i display selected date*/
return departDate.value;
}

/* This function detects the returning date selected by the client*/
function returnChecker(){
/* Here,How can i display selected date*/
return returnDate.value;
}

/* After Selection action when search or buscar */
$(document).ready(function(){
	$('#submit').click(function(){
    	$(location).attr("href",(myFunction() + "$3p=a_hasoffers&$affiliate_json=http%3A%2F%2Ftracking.spothero.com%2Faff_c%3Foffer_id%3D1%26aff_id%3D1574%26format%3Djson&" + 'starts='+ departChecker() + 'T00%3A00&ends=' + returnChecker() + 'T23%3A30')); // Put url to redirect
    });
});

// Book Now button
$(document).ready(function(){
	$('#welcomeThird').click(function(){
    	$(location).attr("href","https://spothero.app.link/rvcE7nrf19?$3p=a_hasoffers&$affiliate_json=http%3A%2F%2Ftracking.spothero.com%2Faff_c%3Foffer_id%3D4%26aff_id%3D1574%26format%3Djson");
    });
});

/* Set today's date for departure date */
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
$('#departDate').val(today);

/* Prevent selection of past dates */
$(function () {
            var currentYear = new Date().getFullYear();
            var minDate = currentYear + '-01-01';
            var maxDate = currentYear + '-12-31';
            $('#departDate').attr('min', minDate);
            $('#returnDate').attr('min', minDate);
        });



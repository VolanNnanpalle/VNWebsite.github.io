$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/vnnanpalle@hotmail.com", 
	    method: "POST",
	    data: {
	    	name: $("#name").val(),
	    	email: $("#email").val(),
	    	phone: $("#phone").val(),
	    	message: $("#message").val()
	    },
	    dataType: "json"
		}).done(function(){
			$("#name").val("");
			$("#email").val("");
			$("#phone").val("");
			$("#message").val("");
			document.getElementById("success").innerHTML="Message Sent"
		}).fail(function(){
			alert("ERROR WHILE SENDING MESSAGE!");
		});
	});

}) ;
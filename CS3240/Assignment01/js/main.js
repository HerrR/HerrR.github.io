$(document).ready(function(){

	$("#menuIcon .glyphicon").click(function(){
		var menuStatus = $("#mainMenu").attr('class');
		toggleMenu(menuStatus);
	});

	function toggleMenu(state){
		if(state == 'open'){
			$("#mainMenu").attr('class','closed');
		} else {
			$("#mainMenu").attr('class', 'open');
		}
	}

	// Hover logo to display personal picture
	$("#logo img").hover(
  		function() {
    		$(this).attr("src","img/rickard.jpg");
  		}, function() {
  			$(this).attr("src","img/logo.png");
  		}
	);

	// Clicking the menu items scrolls to their corresponding sections on the page
	$("#mainMenu li.menuItem a").click(function(){
		var clicked = $(this).html().split(" ")[0].toLowerCase();
		$('html,body').animate({scrollTop: $("#"+clicked).offset().top - 100},'slow');
		toggleMenu('open');
	});

	// Scrolling down makes the background color of the menu bar more opaque
	$(document).scroll(function(){
		if($(document).scrollTop()/250<1){
			$("#mainMenu").css("background-color","rgba(29,34,43,"+$(document).scrollTop()/250+")");
		} else {
			$("#mainMenu").css("background-color","rgba(29,34,43,1)");
		}
	});

	// Form validation for when the user hits the "Send Message"-button
	var messageSent = false;
	$("#messageBtn").click(function () {

		if(messageSent){
			messageSent = false;
			$("#feedbackMessage").html("");
			$("#inputName").val("");
			$("#inputEmail").val("");
			$("#inputMessage").val("");
			$("#inputFields").show(500);
			$("#messageBtn").html('<span class="glyphicon glyphicon-send"></span> Send message!');
		} else {
			var errorMsg = "";
			var errors = 0;
			if($("#inputName").val().length==0){
				errorMsg += "<span class='rejected'><span class='glyphicon glyphicon-remove'></span> Please enter your name.</span> <br/>";
				errors ++;
			} else {
				errorMsg += "<span class='approved'><span class='glyphicon glyphicon-ok'></span> Name </span><br/>";
			}

			if(!isEmail($("#inputEmail").val())){
				errorMsg += "<span class='rejected'><span class='glyphicon glyphicon-remove'></span> Please enter a valid email. </span><br/>";
				errors ++;
			} else {
				errorMsg += "<span class='approved'><span class='glyphicon glyphicon-ok'></span> E-mail </span><br/>";
			}

			if($("#inputMessage").val().length==0){
				errorMsg += "<span class='rejected'><span class='glyphicon glyphicon-remove'></span> Please enter a message. </span> <br/>";
				errors ++;
			} else {
				errorMsg += "<span class='approved'><span class='glyphicon glyphicon-ok'></span> Message </span><br/>";
			}

			if(errors == 0){
				var messageDetails = {};
				messageDetails["name"] = $("#inputName").val();
				messageDetails["email"] = $("#inputEmail").val();
				messageDetails["message"] = $("#inputMessage").val();

				sendEmail(messageDetails);

				$("#feedbackMessage").html("<h3><span class='approved'><span class='glyphicon glyphicon-ok'></span> Message Sent!</span></h3>");
				$("#inputFields").hide(500);
				$("#messageBtn").html("<span class='glyphicon glyphicon-repeat'></span> Send another message!");
				messageSent = true;
			} else {
				$("#feedbackMessage").html(errorMsg);
			}
		}
	})


	// Tests a string to see if the email entered is in e-mail format.
	// Solution found at http://stackoverflow.com/questions/2507030/email-validation-using-jquery
	function isEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}


	function sendEmail(details){
		// Place call to backend here
		console.log("Sending message (not really though)");
		console.log(details);
	}
});
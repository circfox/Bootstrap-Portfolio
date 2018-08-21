$(document).ready(function(){
  // Initialize Firebase
  var config = {
     apiKey: "AIzaSyDQlfAuER5JMKPBxn9JRxhokFr2xHyhh2Y",
    authDomain: "testimonial-fd449.firebaseapp.com",
    databaseURL: "https://testimonial-fd449.firebaseio.com",
    projectId: "testimonial-fd449",
    storageBucket: "testimonial-fd449.appspot.com",
    messagingSenderId: "884247298407"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  	// add new contact
	$("#add-user").on("click", function(event){
		event.preventDefault();

		// User input is assigned to variables
		var name = $("#name-input").val().trim();
		var email = $("#email-input").val().trim();
		var message = $("#comment-input").val().trim();
	// Test for variables entered
  console.log(name);
  console.log(email);
  console.log(message);

  // temp holding before pushing to firebase
		
  var newName = {
    _n: name,
    _l: email,
    _m: message,
  }
	// push data to Firebase
  database.ref().push(newName);

  // reset textbox contents
  $("#name-input").val("");
  $("#email-input").val("");
  $("#comment-input").val("");        
                                            
});	


});
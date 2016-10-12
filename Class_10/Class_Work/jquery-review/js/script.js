$( document ).ready(function() {
    console.log( "ready!" );

  $('#box1').css("background-color", "yellow");

  $('#box2').css("background-color", "yellow");

    $('#box1').click(function(){
		console.log("it worked!")
		$('#box1').css({"height": "500px", "width": "500px"});
	});

    $('#box2').click(function(){
		console.log("it worked!")
		$('#box2').css({"height": "500px", "width": "500px"});
	});
});








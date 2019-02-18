$(document).ready(function(){

	$("#right-slide").click(function(){
		var left = $("#slide-list").offset().left;
		if(left>="-2159"){
			$("#slide-list").css('left',(left-270))
		}
	});

	$("#left-slide").click(function(){
		var right = $("#slide-list").offset().left;
		if(right<="-65"){
			$("#slide-list").css('left',(right+270));
		}
	});	
});
$(document).ready(function(){
	
	
	$("#dd-close").css("display","none");
	
	
	$(".menu").bind("click",function(event){
	
	
		
		if($("#dd-close").css("display")=="block"){
			$("#dd-close").css("display","none");
			$("#dd-menu").css("display","block");
		} else {
			$("#dd-close").css("display","block");
			$("#dd-menu").css("display","none");		
		}
		
			return false;
		event.preventDefault();
	
	});
	
	
	$(".casa-dashboard-item").html()
	
	
	$(".casa-dashboard-item").bind("click",function(){
		
		var link = $(this).find("a");
		
		link = (link).attr("href");
		
		if(link){
			location.href=link;
		}
		
	});
	
	$("a.au-btn").bind("click",function(){
		
		
		
		//$( "body" ).prepend( "<div id='modal'></div>" );

		
		/*
		
		var href = $(this).attr('href');


		$(this).html('Saving...');
		
		$("*").css("cursor", "progress");

		
             // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 2000);
        return false;
		*/
		
	});
	
	
	$(".cancel").bind("click",function(){
		
		
		if (confirm('Are you sure you want to cancel your ARN application?')) {
			
			location.href="cancelled.html";
			
		} else {
			// Do nothing!
		}
		
	});
	
	
});
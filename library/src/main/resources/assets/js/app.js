$(":button").click(function() {
//$(":button").live('click',function() {	
var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	$.ajax({
		  
		  url: "http://localhost:8001/library/v1/books/"+isbn+"?status=lost",
		  type: "PUT",
		  //data: ":button" + isbn,
		  //dataType: "json",
		  success: function(){
		  //$("#status" + isbn).text("lost");
		  alert("The status of book " + isbn + " is now lost and button is disabled once after clicking the Report Lost button.Please refresh to see the updated status");
			  
		  $("#status"+isbn).text("lost");
		  
		  $("#"+isbn).prop("disabled",true);
		  //this.prop('disabled',true);
		  
		}
	});
	
	//$("#"+isbn).prop("disabled",true);
	
});


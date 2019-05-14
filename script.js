$(document).ready(function(){
	var myDivArray=$(".peopleContainer");
	var airtableEndpoint="https://api.airtable.com/v0/app8lhHXG2rCdFJvp/peeps?view=Grid%20view&api_key="+apiKey;

	//api to airtable
	var request =$.ajax({
		url:airtableEndpoint,
		method:"GET",
	});

	request.done(function(response){
		console.log("here is the response:", response);

		//append the values
		for(var i=0;i<myDivArray.length;i++){
			//append names
			$(myDivArray[i]).append('<h3>'+response.records[i].fields.name+'</h3>');
			//append images
			var tempImage = response.records[i].fields.image;
			if(tempImage!=null){
				//image
				$(myDivArray[i]).append('<img src="'+tempImage+'" >');
			}else{
				//placeholder icon
				$(myDivArray[i]).append('<span uk-icon="icon: user; ratio: 10"></span>');
			}
		}
	});

	request.fail(function( requestObject, textStatus ) {
    	alert( "Request failed: " + textStatus );
  	});

});
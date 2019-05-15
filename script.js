$(document).ready(function(){
	var myDivArray=$(".peopleContainer");
	var airtableEndpoint="https://api.airtable.com/v0/app8lhHXG2rCdFJvp/peeps?view=Grid%20view&api_key="+apiKey;

	
	//ADD ICON IMAGES FUNCTION
  	function createIconButton(link, iconName){
  		//return the HTML needed to create an icon button link
  		return '<a href="'+link+'" class="uk-icon-button" uk-icon="icon: '+iconName+'"></a>';
  	}

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
				$(myDivArray[i]).append('<img src="'+tempImage+'" class="uk-margin" >');
			}else{
				//placeholder icon
				$(myDivArray[i]).append('<span uk-icon="icon: user; ratio: 10" class="uk-margin"></span>');
			}

			//append a new div for inline elements
			$(myDivArray[i]).append('<div id="inLineElements'+i+'"></div>');

			//append icons
			if(response.records[i].fields.personalWebsite!=null){
				$("#inLineElements"+i).append(createIconButton(response.records[i].fields.personalWebsite, "link"));
			}
			if(response.records[i].fields.facebookUrl!=null){
				$("#inLineElements"+i).append(createIconButton(response.records[i].fields.facebookUrl, "facebook"));
			}
			if(response.records[i].fields.instagramUrl!=null){
				$("#inLineElements"+i).append(createIconButton(response.records[i].fields.instagramUrl, "instagram"));
			}
			if(response.records[i].fields.twitterUrl!=null){
				$("#inLineElements"+i).append(createIconButton(response.records[i].fields.twitterUrl, "twitter"));
			}
			if(response.records[i].fields.githubUrl!=null){
				$("#inLineElements"+i).append(createIconButton(response.records[i].fields.githubUrl, "github"));
			}

		}
	});

	request.fail(function( requestObject, textStatus ) {
    	alert( "Request failed: " + textStatus );
  	});

  	

  	//personal website
  	//facebookUrl
  	//instagramUrl
  	//twitterUrl
  	//githubUrl











});
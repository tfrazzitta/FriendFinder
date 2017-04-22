// Chosen CSS
    var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

var gender= $("#gender").val();


    // Capture the form inputs 
    $("#submit").on("click", function(){
					console.log("hey")
    	// Form validation
    	function Submit() {
		  var isValid = true;
		  $('.form-control').each(function() {
		    if ( $(this).val() === '' )
		        isValid = false;
		  });

		  $('.chosen-select').each(function() {

		  	if( $(this).val() === "")
		  		isValid = false
		  		 })
		  	
		  return isValid;
		}

		// If all required fields are filled
		if (Submit() == true){
			console.log("bbbb")
			// Create an object for the user's data
	    	var userData = {
	    		name: $("#name").val(),
	    		photo: $("#photo").val(),
	    		gender:$("#gender").val(),
	    		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
	    	}


	    	// Grab the URL of the website
	    	var currentURL = window.location.origin;
	    	//var url = currentURL + "/api/:gender";
				console.log(typeof userData.gender)				    	// AJAX post the data to the friends API. 
					


if(userData.gender=1){
			$.ajax({
				   url: currentURL + "/api/friends/girl",
			       method: "GET",
				   context: userData
				   }).done(function(friends) {
					   var meArray = userData.scores;
					   var total=0;
							for(i=0;i<userData.scores.length;i++) { 
								total += parseInt(userData.scores[i]); 
							    userData.total=parseInt(total);								             
						    }
		 												//console.log(userData.total)	
					


							for(i=0; i<friends.length;i++){
								friends[i].sum= friends[i].scores[0]+friends[i].scores[1]+friends[i].scores[2]+friends[i].scores[3]+friends[i].scores[4]+friends[i].scores[5]+friends[i].scores[6]+friends[i].scores[7]+friends[i].scores[8]+friends[i].scores[9];

        						 friends[i].difference= userData.total-friends[i].sum;
         							//console.log(userData.total)
                                 	//console.log(friends[0].sum)
                                    //console.log(friends[0].difference)

							              if(friends[i].difference<0){
							                  friends[i].difference= friends[i].difference * -1;
							              }
							              else{
							                  friends[i].difference= friends[i].difference
							              }
							             
							                 diffy.push(friends[i].difference);
							                 //console.log(friends[i].difference)
							             }   
						             		   friends.sort(function(a, b) {
						              		   return parseFloat(b.difference) - parseFloat(a.difference);
						                        });
						   
						                        console.log(friends)  
					})

				}		
	



else{
			$.ajax({
				   url: currentURL + "/api/friends/boy",
			       method: "GET",
				   context: userData
				   }).done(function(boy) {
					   var meArray = userData.scores;
					   var total=0;
							for(i=0;i<userData.scores.length;i++) { 
								total += parseInt(userData.scores[i]); 
							    userData.total=parseInt(total);								             
						    }
		 					    //console.log(userData.total)	
					


							for(i=0; i<boy.length;i++){
								boy[i].sum= boy[i].scores[0]+boy[i].scores[1]+boy[i].scores[2]+boy[i].scores[3]+boy[i].scores[4]+boy[i].scores[5]+boy[i].scores[6]+boy[i].scores[7]+boy[i].scores[8]+boy[i].scores[9];

        						boy[i].difference= userData.total-boy[i].sum;
         							// console.log(userData.total)
                //                  	console.log(friends[0].sum)
                //                     console.log(friends[0].difference)

							              if(boy[i].difference<0){
							                  boy[i].difference= boy[i].difference * -1;
							              }
							              else{
							                  boy[i].difference= boy[i].difference
							              }
							             
							                 diffy.push(boy[i].difference);
							                 //console.log(friends[i].difference)
							             }   
						             		  boy.sort(function(a, b) {
						              		   return parseFloat(b.difference) - parseFloat(a.difference);
						                        });
						   
						                        console.log(boy)  
					})

				}		
	

			    		// Grab the result from the AJAX post so that the best match's name and photo are displayed.
	}    			
	    								
	    			// var x = $("<div>")
	    			// 	x.addClass(".compatable")
	    			// 	x.attr("data",data.difference)
	    			// 	x.text(data.name);
	    			// 	x.src("src,data.photo")
	    			// $("#comp").append(x)
	    			//$("#matchName").text(data.name);
	    			//$('#matchImg').attr("src", data.photo);

		    	// Show the modal with the best match 
		    		//$("#resultsModal").modal('toggle');
				
	         
	


	    	
		
		else
		{
			alert("Please fill out all fields before submitting!");
		}
    	
    	return false;
    });

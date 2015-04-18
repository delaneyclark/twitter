$(document).ready(function(){
              $.getJSON("http://cooper-union-search-proxy.herokuapp.com/twitter/search/color", 
                  function(response) {
                        
           
                        for(var i=0; i<15; i++) {
  							// console.log(response.statuses[i].user.statuses_count);


						

							

						if (response.statuses[i].user.statuses_count.length === 1) {
							$("body").append("<div style=\”color:#" + response.statuses[i].user.statuses_count + "ababa\”></div>" )
						} else if (response.statuses[i].user.statuses_count.length === 2) {
							$("body").append("<div style=\”color:#" + response.statuses[i].user.statuses_count + "abab\”></div>" )
						} else if (response.statuses[i].user.statuses_count.length === 3) {
							$("body").append("<div style=\”color:#" + response.statuses[i].user.statuses_count + "aba\”></div>" )
						} else if (response.statuses[i].user.statuses_count.length === 4) {
							$("body").append("<div style=\”color:#" + response.statuses[i].user.statuses_count + "ab\”></div>" )
						} else if (response.statuses[i].user.statuses_count.length === 5) {
							$("body").append("<div style=\”color:#" + response.statuses[i].user.statuses_count + "a\”></div>" )
						} else if (response.statuses[i].user.statuses_count.length === 6) {
							$("body").append("<div style=\”color:#" + response.statuses[i].user.statuses_count + "\”></div>" )
						} else {
							$("body").append("<div style=\”color:#" + response.statuses[i].user.statuses_count + "\”></div>" )
						}
					};

                        
              });
            
            })
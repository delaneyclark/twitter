$(document).ready(function(){
              $.getJSON("http://cooper-union-search-proxy.herokuapp.com/twitter/search/color", 
                  function(response) {
                        
           
                        for(var i=0; i<15; i++) {
  							// console.log(response.statuses[i].user.statuses_count);


						

							

						if (response.statuses[i].user.statuses_count.toString().length == 1) {
							$("ul").append("<div style=\"background-color:#" + response.statuses[i].user.statuses_count + "aaaaa\"></div>" )
						} else if (response.statuses[i].user.statuses_count.toString().length == 2) {
							$("ul").append("<div style=\"background-color:#" + response.statuses[i].user.statuses_count + "aaab\"></div>" )
						} else if (response.statuses[i].user.statuses_count.toString().length == 3) {
							$("ul").append("<div style=\"background-color:#" + response.statuses[i].user.statuses_count + "aaa\"></div>" )
						} else if (response.statuses[i].user.statuses_count.toString().length == 4) {
							$("ul").append("<div style=\"background-color:#" + response.statuses[i].user.statuses_count + "aa\"></div>" )
						} else if (response.statuses[i].user.statuses_count.toString().length == 5) {
							$("ul").append("<div style=\"background-color:#" + response.statuses[i].user.statuses_count + "a\"></div>" )
						} else if (response.statuses[i].user.statuses_count.toString().length == 6) {
							$("ul").append("<div style=\"background-color:#" + response.statuses[i].user.statuses_count + "\"></div>" )
						} else {
							$("ul").append("<div style=\"background-color:#" + response.statuses[i].user.statuses_count + "\"></div>" )
						}
					};

                        
              });
            
            })
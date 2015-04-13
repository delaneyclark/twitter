$(document).ready(function(){
              $.getJSON("http://cooper-union-search-proxy.herokuapp.com/twitter/search/color", 
                  function(response) {
                        
                        console.log(response);

                        var colorNum = response;

                        for(var i=0; i<15; i++) {
  							console.log(response.statuses[i].user.statuses_count);
						};
                        
              });
            
            })
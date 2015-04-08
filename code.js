$(document).ready(function(){
		      $.getJSON("http://cooper-union-search-proxy.herokuapp.com/twitter/search/color", 
		      	function(response) {
						
						console.log(response);

						var idNum = response.statuses.id_str;
						var statNum = response.statuses.statuses_count;

						console.log(idNum);
						console.log(colorNum);
						
		      });
			
			})

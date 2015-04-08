$(document).ready(function(){
		      $.getJSON("http://cooper-union-search-proxy.herokuapp.com/twitter/search/color", 
		      	function(response) {
						
						console.log(response);

						var idNum = response.statuses.id_str {
							function(idstr) {
								//if (take last 6 numbers of string) {
									var out= "#" + idstr;
								}
							}
						}
						var statNum = response.statuses.statuses_count {
							function(status) {
								//if (take first 6 of string) {
								//	var outs= "#" + stuatus
								// } else if (i < 6) {
								// 	var outs= "#" + status + "AB"	
								//} else {
								//	var outs= "#" + status	
								//}
							}
						} ;

						console.log(idNum);
						console.log(colorNum);
						
		      });
			
			})

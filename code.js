$(document).ready(function(){
              $.getJSON("http://cooper-union-search-proxy.herokuapp.com/twitter/search/color", 
                  function(response) {
                        
                        for(var i=0; i<15; i++) {
  							var colNum = console.log(response.statuses[i].user.statuses_count);
						};

						if (colNum.length = 1) {
							$("body").append("<div style=color:#" + colNum + "ababa></div>" )
						} else if (colNum.length = 2) {
							$("body").append("<div style=color:#" + colNum + "abab></div>" )
						} else if (colNum.length = 3) {
							$("body").append("<div style=color:#" + colNum + "aba></div>" )
						} else if (colNum.length = 4) {
							$("body").append("<div style=color:#" + colNum + "ab></div>" )
						} else if (colNum.length = 5) {
							$("body").append("<div style=color:#" + colNum + "a></div>" )
						} else if (colNum.length = 6) {
							$("body").append("<div style=color:#" + colNum + "></div>" )
						} else {
							$("body").append("<div style=color:#" + colNum + "></div>" )
						}
                        
              });
            
            })
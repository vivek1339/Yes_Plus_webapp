# YES!+_webapp

      API call		                                      Purpose					                          Response
      

http://localhost:5000/add_user			          Adding new user to database		              JSON object { "status":number }

http://localhost:5000/login			              Logging in an already existing user	        JSON object { "status":number, "userdata": { "email": user_email, "type": user_type } }
						                                  If the user doesnt exist                    JSON object { "status":number, "userdata": null }



http://localhost:5000/add_event			          Adding a new event to database		          JSON object { "status":number }

http://localhost:5000/display_event		        Displaying all the events from 		          JSON array [ { event object }, { next event object }, ... ]
						                                  the database



http://localhost:5000/add_testimonial		      Adding a new testimonial to database	      JSON object { "status":number }

http://localhost:5000/display_testimonial	    Displaying all the events from 		          JSON array [ { event object }, { next event object }, ... ]
						                                  the database


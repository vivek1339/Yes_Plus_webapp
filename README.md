# YES!+_webapp
API calls used in this website
---------------
A. **User**  
1. http://localhost:5000/add_user -  
Adding new user to database		  
Returns a JSON object { "status":number }

2. http://localhost:5000/login -   
Logging in an already existing user - Returns a JSON object { "status":number, "userdata": { "email": user_email, "type": user_type } }  
If the user doesnt exist	          - Returns a	JSON object { "status":number, "userdata": null }  


B. **Event**  
3. http://localhost:5000/add_event	-   
Adding a new event to database		  
Returns a JSON object { "status":number }  

4. http://localhost:5000/display_event -   
Displaying all the events from the database  
Returns a JSON array [ { event object }, { next event object }, ... ]  


C. **Testimonial**  
5. http://localhost:5000/add_testimonial -   
Adding a new testimonial to database	  
Returns a JSON object { "status":number }  

6. http://localhost:5000/display_testimonial -   
Displaying all the events from the database  
Returns a JSON array [ { event object }, { next event object }, ... ]  

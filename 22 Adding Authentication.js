// We will explore how authentication works in react apps
// We will explore how authentication will work and we will implement user authentication  

// what and how is authentication 

// Authentication is needed when your content should be protected not accessibly by everyone 

// For example change password page should only be visible to the loggedin users not all the users . 

// So we have to restrict that api end point (should not be accessible  by everyone)
// Restrict the pages of our websits 


// AUTHENTICATION IS A 2 STEP PROCESS

// * Get access / permission ( Once we have the permission we can unlock certain pages we can reuse that permission to unlock more than one pages  )

// * Send request to the protected resource  


// Life cycle

// Request with user crendentials -> server -> response(yes/no)-> client browser 

// But that yes and no alone is not enough as it was not secure  so we should use more than yes or no We can make that batter using 
// server side sessions -> store some unique identifer on the server -> send that identifier back to the client ( but the disadventage is that there should be high coupling between frontend and backend . but in reality frontend and backend should be decoupled the server should be stateless and should not store that kind of data)
// and authentication tokens  -> all same but create a unique identifier in the form of create (a permission token) on server send token to the client -> but only server knows how to create that token -> using a private key which is only known by the server 

// jwt is  making alot of info into one singlr string 



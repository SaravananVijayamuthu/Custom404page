# Custom 404 page
Custom 404 Not Found page in Express(Nodejs)

## For beginners with express, here's the easiest way I can think of making your own "404 not found" page
When The User visits a URL that your app doesn't recognize, Send back your 404 page.

# Explanation

#### WHAT ARE WE DOING?
We develop an HTML+CSS file that the app can send back to the client if the client requests data from a URL not recognised by the app (route does not exist)
When the request is sent by the client, it will search at all the routes and if it couldn't match any, it will always match the last one-which is our 404 HTML page.


## NOTE
This is the simplest way I can think about doing your own 404 Code response this is the easiest approach. This can be done further with Template Engines, or anything to make the response further interactive depending on the user's request.

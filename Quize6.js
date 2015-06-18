/// Question 4
// "/" tell us what the end point is, if you had another file or endpoint it may look something like this "/endPoint2"
// Then we run the function when a request is matched and it will return a response.
app.get("/", function (req, res) {
  //this is the response that we are sending back.
  res.sendFile (
    // the content of whatever you will be sending back.
  {
    "firstName": "Sanita",
    "lastName": "Zayshlyy",
    "age": "27",
 }
});


/// question 5
// Im still having trouble understanding the intricacies but i think it works just like the example above then. The first part of the ajax .get request tells us where we are getting the info in this case "/" and then we run the function.
$.get ("/", function (res) {
    // Here we are adding our response which is a JASON file to the body of our HTML page.
  $("body").text(res.jasonFile);
});

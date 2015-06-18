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

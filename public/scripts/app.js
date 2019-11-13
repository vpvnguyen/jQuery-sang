// interact with dom using id
$("#do-something").on("click", function() {
  alert("hello!");
});

// with classes
$(".do-something-else").on("click", function() {
  alert("heyo!");
});

// get data from backend
$(".get-data").on("click", function() {

    // http request; get json data
  axios
  .get("/api")
  .then(function(response) {
    console.log(response);
    $('#put-data-here').append(`<div>${response.data.name}`);
    $('#put-data-here').append(`<div>${response.data.title}`);
  })
  .catch(function(error) {
    console.log(error);
  });

});

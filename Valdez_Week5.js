 // Setup an empty array that will hold the movies.
 var arrMovies = [];

 //function to add a movie to the movies array.
 function addMovie(event){
     event.preventDefault(); //prevents the form from submitting and refreshing.
     //setup a pointer variable to the movie text input
     var txtMovieInput = document.getElementById("txtMovie");
     //setup a variable that holds the movie title.
     var movieTitle = txtMovieInput.value.trim();

     //check to make sure a movie was entered.
     if (movieTitle){
         //add the movie title to the array.
         arrMovies.push(movieTitle);
         // sort the array.
         arrMovies.sort();
         // clear the text from the input textbox.
         txtMovieInput.value = "";
         //call the function to update the movies that appear on the page.
         updateMovieList();
     }
 }
 function updateMovieList(){
     //create an empty array to hold the html formatted movie list.
     var arrMoviesFormatted = [];
     //poitner to the movie list div
     var divMovies = document.getElementById("divMovieList");

     //loop thru the movie array.
     for (var i=0; i < arrMovies.length; i++){
         // take the array items and format with some html.
         arrMoviesFormatted.push("<div>" + arrMovies[i] + "</div>");
     }

//turn the formatted lsit of movies into a string.
     divMovies.innerHTML = arrMoviesFormatted.join('');
 }

 //funtion to clear the movies from the list.

 function clearList(){
     //clear the movies array.
     arrMovies= [];

     updateMovieList();
 }
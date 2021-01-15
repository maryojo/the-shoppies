

let inputMovie = document.getElementById('inputMovie');
let searchButton = document.getElementById('searchButton');
let searchResultDisplay = document.getElementById('searchResult');

let addMovie = document.getElementsByClassName('add');
let deleteMovie = document.getElementsByClassName('delete');
let savedMovie = document.getElementsByClassName('saved-movie');
// let saveNomination = document.getElementById('save');
let share = document.getElementById('share');
// let notify = document.getElementById('notify');

// movie info display
let movieTitle = document.getElementById('movieTitle');
let movieImage = document.getElementById('movieImg');
let movieGenre = document.getElementById('genre');
let movieYear = document.getElementById('year');
let movieRating = document.getElementById('rating');
let movieVotes = document.getElementById('noOfVotes');

let savedMovieTitle = document.getElementsByClassName('saved-movie-title');
// let movieTitleSavedMovie = document.querySelector('.saved-list .saved-movie .col-7 .saved-movie-title');

const searching = document.getElementById('searching');
const noResultDisplay = document.getElementById('no-result');
const resultList = document.getElementById('result-list');
const savedList = document.getElementById('saved-list');

let movieTit;
let movietoAdd;
let savedMovieTitleValue;

// Search on input of movie name
const getinputMovie = () =>{
    inputMovie = inputMovie.value;
    console.log(inputMovie);
    // inputMovie.value=" ";
    searching.style.display= "block";
    searchMovie(inputMovie);
}

//On click of search, get Search results
searchButton.addEventListener('click', getinputMovie);




// Search for movie
const searchMovie = (movieName) =>{
    fetch('https://www.omdbapi.com/?t='+movieName+'&apikey=5dbf8aee')
.then(response => response.json())
.then(data => {
    console.log(data);



    movieTitle.innerHTML = data['Title'];
    movieYear.innerHTML = data['Year'];
    movieImage.src = data['Poster'];
    movieGenre.innerHTML = data['Genre'];
    movieRating.innerHTML = data['imdbRating'];
    movieVotes.innerHTML = data['imdbVotes'];

    searching.style.display = "none";
    noResultDisplay.style.display="none";
    searchResultDisplay.style.display="block";

    movieTit = movieTitle.innerHTML;
    movieImg = movieImage.src;
    movieYr = movieYear.innerHTML;

})
}






//add Movie to Nominations
const addtoNomination = () =>{
    let div1 = document.createElement('div');
    savedList.appendChild(div1);
    div1.classList.add('row', 'saved-movie');

    let img = document.createElement('img');
    div1.appendChild(img);
    img.classList.add('col-3', 'movie-small-image');
    // img.id = 'savedMovieImage';
    img.src = movieImg;

    let div2 = document.createElement('div');
    div1.appendChild(div2);
    div2.classList.add('col-7');
    // div2.id = 'savedMovie1';

    let h6 = document.createElement('h6');
    div2.appendChild(h6);
    h6.classList.add('saved-movie-title');
    // h6.id = savedMovieTitle;
    h6.textContent = movieTit;


    let p = document.createElement('p');
    div2.appendChild(p);
    // p.classList.add('');
    // h6.id = savedMovieTitle1;
    p.textContent = movieYr;

    let i = document.createElement('i');
    div1.appendChild(i);
    i.classList.add('fas', 'fa-trash', 'col-2', 'caution-icon', 'delete');

    console.log('2');

    
    for(let i=0; i<savedMovie.length; i++){
        savedMovieTitleValue = savedMovieTitle[i].innerHTML;
    console.log(savedMovieTitleValue);
    }
    


    function remove() {
        this.parentNode.parentNode.removeChild(this.parentNode);
        console.log('4');
    }

    //onclick delete movie
    for(let i=0; i<deleteMovie.length; i++){
        deleteMovie[i].addEventListener('click', remove, false);
    }


}

// Add movie to nomination
const checkMovie = () =>{
    // check if movie is in list
    for(let i=0; i<savedMovie.length; i++){
        if(movieTit === savedMovieTitleValue ){
            // disable add button
            function disableButton (el){
                el.disabled = true;
                console.log('disabled');
            }

            for(let i=0; i<addMovie.length; i++){
                disableButton(addMovie[i]);
            }

        }
    }
    // console.log(6);

    // check if list is full
        if(savedMovie.length < 5){
            console.log('1');
            addtoNomination();
        } else {
            alert('Sorry, you have made 5 nominations already.');
        }
}

//On click of add, add movie to nomination list
for(let i =0; i <addMovie.length; i++){
    addMovie[i].addEventListener('click', checkMovie);
}

// share tooltip
tippy('#share', {
    content: '<a href="www.google.com">Google</a>',
    allowHTML: true,
    theme: 'light',
    trigger: 'click',
  });




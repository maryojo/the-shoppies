

let inputMovie = document.getElementById('inputMovie');
let searchButton = document.getElementById('searchButton');
let searchResultDisplay = document.getElementById('searchResult');

let addMovie = document.getElementsByClassName('add');
let deleteMovie = document.getElementsByClassName('delete');
let savedMovie = document.getElementsByClassName('saved-movie');
let share = document.getElementById('share');

let savedMovieTitle = document.getElementsByClassName('saved-movie-title');

const searching = document.getElementById('searching');
const noResultDisplay = document.getElementById('no-result');
const resultList = document.getElementById('result-list');
const savedList = document.getElementById('saved-list');

let movieTit;
let movieImg;
let movieYr;
let savedMovieTitleValue;


const getinputMovie = (input) =>{
    searching.style.display= "block";
    searchFilms(input);
}


// search api for movie
const searchFilms = async searchText =>{
    const resp = await fetch('https://www.omdbapi.com/?t='+searchText+'&apikey=5dbf8aee')

    .then(res => res.json())
    .then(movies => {


    //check if input value is empty
    if(inputMovie.value.length === 0){
        movies = [];
        searchResultDisplay.innerHTML = '';
        searching.style.display= "none";
    }

    if(movies['Poster'] === undefined){
        alert('Wrong movie');
    }

    // input values into html
    movieTit = movies['Title'];
    movieImg = movies['Poster'];
    movieYr = movies['Year'];

    //hide searching animation
    searching.style.display= "none";

    //show the output
    outputHtml(movies);
})
.catch(() =>{
   
}
)}

//Show results in display
const outputHtml = data => {
        if(inputMovie.value.length !== 0){

            const html = 
            `<div class="row movie-desc">
                <img src="${data['Poster']}" alt="" class="col-3 movie-image" id="movieImg">
                <div class="col-7" id="movie1">
                    <h6 class="" id="movieTitle">${data['Title']}</h6>
                    <p class="" id="genre">${data['Year']}</p>
                    <p class="" id="year">${data['Genre']}</p>
                    <p class=""><i class="fas fa-star star-icon"></i><span>   </span><span id="rating">${data['imdbRating']}</span>/10 (<span id="noOfVotes"> ${data['imdbVotes']}</span>)</p>
                </div>
                <i class="fas fa-plus-circle col-2 icon add" onclick="checkMovie();">
                </i>
            </div>`
             
        searchResultDisplay.innerHTML = html;
        }
            
}

//check if movie is in list and if list is greater than 5
const checkMovie = () =>{

        for(let i=0; i<savedMovie.length+1; i++){
            if(movieTit === savedMovieTitleValue ){
                // for(let i=0; i<addMovie.length; i++){
                   addMovie[i].onclick = false;
                // }
            }
        }

        // check if list is full
            if(savedMovie.length < 5){
                console.log('1');
                addtoNomination();
            } else {
                alert('Sorry, you have made 5 nominations already.');
            }
    }


    //add checked movie to nomination list
    const addtoNomination = () =>{
        let div1 = document.createElement('div');
        savedList.appendChild(div1);
        div1.classList.add('row', 'saved-movie');

            let img = document.createElement('img');
            div1.appendChild(img);
            img.classList.add('col-3', 'movie-small-image');
            img.src = movieImg;

            let div2 = document.createElement('div');
            div1.appendChild(div2);
            div2.classList.add('col-7');

                let h6 = document.createElement('h6');
                div2.appendChild(h6);
                h6.classList.add('saved-movie-title');
                h6.textContent = movieTit;

                let p = document.createElement('p');
                div2.appendChild(p);
                p.textContent = movieYr;

            let i = document.createElement('i');
            div1.appendChild(i);
            i.classList.add('fas', 'fa-trash', 'col-2', 'caution-icon', 'delete');


    //Store value of movie title
    for(let i=0; i<savedMovie.length; i++){
        savedMovieTitleValue = savedMovieTitle[i].innerHTML;
    }
    

    //function to delete movie
    function remove() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }

    //onclick delete movie
    for(let i=0; i<deleteMovie.length; i++){
        deleteMovie[i].addEventListener('click', remove, false);
    }


}


//Event listeners
inputMovie.addEventListener('input', () => getinputMovie(inputMovie.value));
searchButton.addEventListener('click', () => searchFilms(inputMovie.value));


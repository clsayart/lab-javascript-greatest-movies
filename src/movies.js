// Iteration 1: All directors? - Get the array of all directors.

/*function getAllDirectors(){};
/*function howManyMovies(){};*/
function getAllDirectors2(movies) {
   //  console.log(movies)
    const directorNames = movies.map(function(movie) {
       // console.log(movie)
        return movie.director;
    });
    console.log(directorNames)
    return directorNames;
}

const getAllDirectors = (movies) => movies.map(m => m.director);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let add=0;
    const directorsDramas = movies.filter(function(movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")!==-1)
        { add += 1 }
    });
           return add;
      }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
   
    const averageRate = movies.reduce(function(total, movieRating){
      if( movieRating.genre.indexOf("Drama")!==-1){
        return (total + movieRating.rate) / movies.length ;
      }else {
          return 0;
      }
  
    },0)
    return averageRate;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){

      const averageDramaRating = movies.reduce(function(accumulator, currentValue) {
        return (accumulator + currentValue.rate) / movies.length;
      }, 0)
       return averageDramaRating;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    const moviesClone = [...movies];
    const moviesCloneAsc = moviesClone.sort(function (a, b) {
        if(a.year === b.year){
            const title1 = a.title.toUpperCase();
            const title2 = b.title.toUpperCase();
        
            let comparison = 0;
        
            if (title1 > title2) {
                comparison = 1;
            } else if (title1 < title2) {
                comparison = -1;
            }
            return comparison;
        
        }else{
            return a.year - b.year;
        }
        
    });
  
    return moviesCloneAsc;
   
} console.log(moviesCloneAsc);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const moviesCloneTitles = [...movies];
    const orderedByTitle = moviesCloneTitles.sort(function(a, b) {
       
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        }else if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1;
        }else {
            return 0;
        }
        
    }
    )
        
           return orderedByTitle.map(function(a){
               return a.title;
           });
    
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

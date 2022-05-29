
import { getGenres } from './fakeGenreService';
import httpService from './httpService'
const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    wholeSaleRate: 2.5,
    retailRate: 3,
    dpRate: 2,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    title: "Tss",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    wholeSaleRate: 2.5,
    retailRate: 2.5,
    dpRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
];

export async function  getMovies() {
  const {data:movies} = await httpService.get('https://steelsteelapi.herokuapp.com/listings');
  return movies;
}

export async function getMovie(id) {
  const  movies = await getMovies();
  return movies.find(m => m._id === id);
}

export async function saveMovie(movie) {
  const genre =await getGenres()
  let movieInDb = await getMovie(movie._id) || {}
  movieInDb.title = movie.title;
  movieInDb.genre = genre.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dpRate = movie.dpRate;
  movieInDb.wholeSaleRate = movie.wholeSaleRate;
  movieInDb.retailRate = movie.retailRate;
  if(!!movieInDb._id)
  {
   console.log(movieInDb) 
  await httpService.put('https://steelsteelapi.herokuapp.com/listing',movieInDb)
  }
  else
 await  httpService.post('https://steelsteelapi.herokuapp.com/listing',movieInDb)

  return movieInDb;
}

export async function  deleteMovie(id) {
  await httpService.delete('https://steelsteelapi.herokuapp.com/listings/delete/'+id)
}

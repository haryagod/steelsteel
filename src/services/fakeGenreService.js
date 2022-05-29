import httpService from "./httpService";


export async function getGenres() {
   const {data} = await httpService.get('https://steelsteelapi.herokuapp.com/genre');
   return data;
}

import httpService from "./httpService";


export async function getGenres() {
   const {data} = await httpService.get('http://localhost:5000/genre');
   return data;
}

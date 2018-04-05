import md5 from 'md5';
import axios from 'axios';

const API_KEY = "ff8685f9b00035a8ed45fb824fc5827f";
const PRIVATE_KEY = 'a9547652c84318e837edd15adcae03d57d4a4be1';
const ROOT_URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}`

export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_COMIC = 'FETCH_COMIC';

export function fetchCharacter(character, timeStamp){
   const HASH = md5(timeStamp+PRIVATE_KEY+API_KEY);
   const url = `${ROOT_URL}&name=${character}&ts=${timeStamp}&hash=${HASH}`;
   const request = axios.get(url);

   return{
     type: FETCH_CHARACTER,
     payload: request
   }
}

export function fetchComic(comicUrl, timeStamp){
  const HASH = md5(timeStamp+PRIVATE_KEY+API_KEY);
  const url = `${comicUrl}?apikey=${API_KEY}&ts=${timeStamp}&hash=${HASH}`;
  const changedUrl = url.replace('http', 'https'
  const request = axios.get(changedUrl);

  return{
    type: FETCH_COMIC,
    payload: request
  }
}

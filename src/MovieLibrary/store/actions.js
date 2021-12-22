import {FETCH_MOVIES, SORT_MOVIES, GET_MOVIES} from '../../actionTypes'
import topRatedMovies from '../mocks/topTatedMovies'
import axios from "axios"

export function fetchTopRatedMovies() {
  return {
    type: FETCH_MOVIES,
    payload: topRatedMovies
  }
}

export function getMoviesAPI(page){

  return async function (dispatch){
    try{
      const url ="https://api.themoviedb.org/3/movie/now_playing";
      const data = await axios.get(url, {
        params: {
          api_key:'54ffed57deb5a7a8688be4de3007e578',
          lenguage: 'en-US',
          page: page,
        }
      })
      
      dispatch({
        type: GET_MOVIES,
        payload: data.data.results,
      })  
    } catch(error){
      console.log(error);
    } 
  }
}
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import InfiniteScroll from "react-infinite-scroll-component";

import logo from '../logo.svg'
import './MovieLibrary.css'
import {getMovies} from '../../store/selectors'
import { getMoviesAPI } from '../../store/actions'
import MoviesList from '../movieList/MoviesList'


    const MovieLibrary = ({movies, getMoviesAPI}) => {

      const [data, setData] = useState([])
      const [page, setPage] = useState(1)

      const handleScroll = () => setPage((prevPage) => prevPage + 1)

      useEffect(() => {
        getMoviesAPI(page)
      }, [page])

      let array = [];
      array = data.concat(movies)

      useEffect(() => {
        setData(array)
      }, [movies])

      return (
        <div className="MovieLibrary">
          <header className="ML-header">
            <img src={logo} className="ML-logo" alt="logo" />
            <h1 className="ML-title">Movies</h1>
          </header>
          <InfiniteScroll
            dataLength={data.length}
            hasMore={true}
            next={handleScroll}
          >
          <div className="ML-intro">
            { data.length && <MoviesList movies={data}/> }
          </div>
          </InfiniteScroll>
        </div>
      );
    }
//   }
// }
  const mapStateToProps = (state) =>{
    return{
        movies:  getMovies(state)
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesAPI: (page) => {
            dispatch(getMoviesAPI(page))
        },
    }
  }

    

export default connect(mapStateToProps, mapDispatchToProps)(MovieLibrary)


import React, { useState, useEffect } from 'react'

// Component
import axios from '../../../Container/axios/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


// CSS
import './Row.css'


const  Row = ({title, fetchURL,isLargeRow}) => {
    // State
    const [setMovies, setMoviesState] = useState([]);
    const [setTrailerUrl, setTrailerUrlState] = useState('')


    // SetState
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMoviesState(request.data.results);
            return request;
        };
        fetchData()
    }, [fetchURL]);
    
    // YouTube opts 
    const opts={
        height: '390px',
        width: '100%',
        playerVars:{
          
          autoplay: 1,
        }
    }
    // Base URL
    const imgURL = 'https://image.tmdb.org/t/p/original/';

    // Event Handler
    const trailerEventHandler = (item) => {
         if(setTrailerUrl){
            setTrailerUrlState('');
         } else{
             movieTrailer(item.name || '')
             .then(url =>{
                 const urlParam = new URLSearchParams(new URL(url).search)
                 setTrailerUrlState(urlParam.get('v'));
                }).catch(error => {
                 console.log(error)
             })
         }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__photos">
                {setMovies.map(ele => (
                    <img className={`row__photo ${isLargeRow && 'row__photoLarge'}`}
                        src={`${imgURL}${isLargeRow ?  ele.poster_path: ele.backdrop_path}`} 
                        alt={ele.name}
                        key={ele.id}
                        onClick={() => trailerEventHandler(ele)}
                    />
                ))}
            </div>
            {setTrailerUrl && <YouTube videoId={setTrailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row

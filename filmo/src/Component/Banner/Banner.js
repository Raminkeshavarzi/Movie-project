import React, { useState, useEffect } from 'react'

// Component
import axios from '../../Container/axios/axios'
import movieRequest from '../../Container/axios/api_Request'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
// CSS 
import './Banner.css'

function Banner() {
// State 
const [setMovies, setMoviesState] = useState([]);
const [setTrailerUrl, setTrailerUrlState] = useState('')

// To generate random gener    
    const api_movie = [
         movieRequest.fetchActionMovies,
         movieRequest.fetchTopRated, movieRequest.fetchTrending,
         movieRequest.fetchFilmo, movieRequest.fetchHorrorMovies,
         movieRequest.fetchMystery, movieRequest.fetchRomanceMovies, 
         movieRequest.fetchAnimation, movieRequest.fetchComedyMovies, 
         movieRequest.fetchDocumentaries, movieRequest.fetchDocumentaries,  
        ]
    const randomApi = api_movie[Math.floor(Math.random() * api_movie.length - 1)]

// UseEffect
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(randomApi);
            setMoviesState(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
        };
        fetchData()
        setInterval(() => {
            fetchData()
        }, 8000);
    }, [])


    // Base URL
      const imgURL = 'https://image.tmdb.org/t/p/original/';

    const truncateText = (str, number) =>  {
       return str?.length > number ? str.substr(0, number -1) + '  •••' : str;
    }

     // YouTube opts 
     const opts={
        height: '400px',
        width: '100%',
        playerVars:{
          autoplay: 1,
        }
    }

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
        <header className="banner"
         // Inline CSS
         style={{
             backgroundImage: `url("${imgURL}${setMovies?.backdrop_path}")`,
             backgroundSize: 'cover',
             backgroundPosition: 'center center',
         }}>
            <div className="banner_contents">
                <h1 className="title"> {setMovies?.title || setMovies?.name || setMovies?.original_name} </h1>
                <div className="banner__buttons">
                    <button className="banner__button" onClick={() => trailerEventHandler(setMovies)}> Play </button>
                </div>
                <h2 className="banner__overview">
                    {truncateText(setMovies.overview, 150)}
                </h2>
                <div  className="banner--fadeBottom"/>
            </div>
            {setTrailerUrl && <div className="youtube"><YouTube videoId={setTrailerUrl} opts={opts} /></div> }
        </header>
    )
}

export default Banner

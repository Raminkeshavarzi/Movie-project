import React, { useState, useEffect } from 'react'

// Component
import axios from '../../../Container/axios/axios'

// CSS
import './Row.css'


const  Row = ({title, fetchURL,isLargeRow}) => {
    // State
    const [setMovies, setMoviesState] = useState([]);

    // SetState
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMoviesState(request.data.results);
            return request;
        };
        fetchData()
    }, [fetchURL]);
    
    // Base URL
    const imgURL = 'https://image.tmdb.org/t/p/original/';

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__photos">
                {setMovies.map(ele => (
                    <img className="row__photo" 
                        src={`${imgURL}${isLargeRow ?  ele.poster_path: ele.backdrop_path}`} 
                        alt={ele.name}
                        key={ele.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row

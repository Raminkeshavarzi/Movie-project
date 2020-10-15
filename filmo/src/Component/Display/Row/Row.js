import React, { useState, useEffect } from 'react'

// Component
import axios from '../../../Container/axios/axios'
// CSS



const  Row = ({title, fetchURL}) => {
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
    }, [fetchURL])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row

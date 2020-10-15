import React, { useState, useEffect } from 'react'
// Component
// CSS
const  Row = ({title}) => {
    // State
    const [setMovies, setMoviesState] = useState([]);

    // SetState
    useEffect(() => {

    }, [])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row

import React from 'react';

//Components
import Row from '../../Component/Display/Row/Row'
import apiRequest from '../axios/api_Request'
// CSS

function FilmoBuilder() {
    const movieTitles = [
        {id: 1 ,title: 'Filmo', fetchURL: apiRequest.fetchFilmo, isLargeRow: true},
        {id: 2 ,title: 'Trending', fetchURL: apiRequest.fetchTrending, isLargeRow:false},
        {id: 3 ,title: 'Top Rated', fetchURL: apiRequest.fetchTopRated, isLargeRow:false},
        {id: 4 ,title: 'Romance', fetchURL: apiRequest.fetchRomanceMovies, isLargeRow:false},
        {id: 5 ,title: 'Comedy', fetchURL: apiRequest.fetchComedyMovies, isLargeRow:false},
        // {id: 6 ,title: 'Sci-Fi', fetchURL: apiRequest.fetchSciFi, isLargeRow:false},
        {id: 7 ,title: 'Animation', fetchURL: apiRequest.fetchAnimation, isLargeRow:false},
        {id: 8 ,title: 'Documentaries', fetchURL: apiRequest.fetchDocumentaries, isLargeRow:false},
        // {id: 9 ,title: 'Horror', fetchURL: apiRequest.fetchHorrorMovies, isLargeRow:false},
        // {id: 10 ,title: 'Mystery', fetchURL: apiRequest.fetchMystery, isLargeRow:false},
        // {id: 11 ,title: 'Western', fetchURL: apiRequest.fetchWestern, isLargeRow:false},
    ]
  return (
    <div>
      {movieTitles.map(item => {
          return <Row title={item.title} 
                      fetchURL={item.fetchURL} 
                       key={item.id} 
                       isLargeRow={item.isLargeRow}
                       />
      })}
    </div>
  );
}

export default FilmoBuilder();

import React from 'react';

//Components
import Row from '../../Component/Display/Row/Row'
import apiRequest from '../axios/api_Request'
// CSS

function FilmoBuilder() {
    const movieTitles = [
        {id: 1 ,title: 'Filmo', fetchURL: apiRequest.fetchFilmo},
        {id: 2 ,title: 'Trending', fetchURL: apiRequest.fetchTrending},
        {id: 3 ,title: 'Top Rated', fetchURL: apiRequest.fetchTopRated},
        {id: 4 ,title: 'Romance', fetchURL: apiRequest.fetchRomanceMovies},
        {id: 5 ,title: 'Comedy', fetchURL: apiRequest.fetchComedyMovies},
        {id: 6 ,title: 'Sci-Fi', fetchURL: apiRequest.fetchSciFi},
        {id: 7 ,title: 'Animation', fetchURL: apiRequest.fetchAnimation},
        {id: 8 ,title: 'Documentaries', fetchURL: apiRequest.fetchDocumentaries},
        {id: 9 ,title: 'Horror', fetchURL: apiRequest.fetchHorrorMovies},
        {id: 10 ,title: 'Mystery', fetchURL: apiRequest.fetchMystery},
        {id: 11 ,title: 'Western', fetchURL: apiRequest.fetchWestern},
    ]
  return (
    <div>
      {movieTitles.map(item => {
          return <Row title={item.title} 
                      fetchURL={item.fetchURL} 
                       key={item.id} 
                       />
      })}
    </div>
  );
}

export default FilmoBuilder();

import React from 'react';

//Components
import Row from '../../Component/Display/Row/Row'
import apiRequest from '../axios/api_Request'
// CSS

function FilmoBuilder() {
    const movieTitles = [
        {title: 'Filmo', fetchURL: apiRequest.fetchFilmo},
        {title: 'Trending', fetchURL: apiRequest.fetchTrending},
        {title: 'Top Rated', fetchURL: apiRequest.fetchTopRated},
        {title: 'Romance', fetchURL: apiRequest.fetchRomanceMovies},
        {title: 'Comedy', fetchURL: apiRequest.fetchComedyMovies},
        {title: 'Sci-Fi', fetchURL: apiRequest.fetchSciFi},
        {title: 'Animation', fetchURL: apiRequest.fetchAnimation},
        {title: 'Documentaries', fetchURL: apiRequest.fetchDocumentaries},
        {title: 'Horror', fetchURL: apiRequest.fetchHorrorMovies},
        {title: 'Mystery', fetchURL: apiRequest.fetchMystery},
        {title: 'Western', fetchURL: apiRequest.fetchWestern},
    ]
  return (
    <div>
      {movieTitles.map(item => {
          return <Row title={item.title} fetchURL={item.fetchURL} />
      })}
    </div>
  );
}

export default FilmoBuilder();

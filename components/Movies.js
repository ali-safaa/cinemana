import Image from 'next/image'
import React from 'react'

function Movies({ popularMovies, popularKidsMovies, bestDramas }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/'
  return (
    <div className="mt-5">
      <h3 className="mb-3 ml-3">popular Movies</h3>
      <div className="mb-10 ml-3 flex items-center space-x-3 overflow-scroll">
        {popularMovies.map((popularMovie) => (
          <img
            className="h-[300px] w-[200px] rounded-md object-cover"
            src={`${baseUrl}${popularMovie.backdrop_path || poster_path}`}
            alt=""
          />
        ))}
      </div>
      <h3 className="mb-3 ml-3">popular Kids Movies</h3>
      <div className="mb-10 ml-3 flex items-center space-x-3 overflow-scroll">
        {popularKidsMovies.map((popularKidsMovie) => (
          <img
            className="h-[300px] w-[200px] rounded-md object-cover"
            src={`${baseUrl}${popularKidsMovie.backdrop_path || poster_path}`}
            alt=""
          />
        ))}
      </div>
      <h3 className="mb-3 ml-3">best Dramas</h3>
      <div className="mb-10 ml-3 flex items-center space-x-3 overflow-scroll">
        {bestDramas.map((bestDrama) => (
          <img
            className="h-[300px] w-[200px] rounded-md object-cover"
            src={`${baseUrl}${bestDrama.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}

export default Movies

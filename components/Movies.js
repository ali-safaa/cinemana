import Image from 'next/image'
import React from 'react'

function Movies({ popularMovies, popularKidsMovies, whatmoviesTheatres }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/'
  return (
    <div className="mt-5">
      <h3 className="mb-3 ml-3 md:text-2xl">popular Movies</h3>
      <div className="mb-10 ml-3 flex items-center space-x-3 overflow-scroll">
        {popularMovies.map((popularMovie) => (
          <img
            className="w-[250px] rounded-md object-cover md:w-[300px]"
            src={`${baseUrl}${popularMovie.backdrop_path || poster_path}`}
            alt=""
          />
        ))}
      </div>
      <h3 className="mb-3 ml-3 md:text-2xl">popular Kids Movies</h3>
      <div className="mb-10 ml-3 flex items-center space-x-3 overflow-scroll">
        {popularKidsMovies.map((popularKidsMovie) => (
          <img
            className="w-[250px] rounded-md object-cover md:w-[300px]"
            src={`${baseUrl}${popularKidsMovie.backdrop_path || poster_path}`}
            alt=""
          />
        ))}
      </div>
      <h3 className="mb-3 ml-3 md:text-2xl">movies Theatres</h3>
      <div className="mb-10 ml-3 flex items-center space-x-3 overflow-scroll">
        {whatmoviesTheatres.map((whatmoviesTheatre) => (
          <img
            className="w-[250px] rounded-md object-cover md:w-[300px]"
            src={`${baseUrl}${whatmoviesTheatre.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}

export default Movies

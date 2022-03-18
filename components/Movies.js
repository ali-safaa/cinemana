import React from 'react'

function Movies({ popularMovies, popularKidsMovies, whatmoviesTheatres }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/'
  return (
    <div className="mt-3 ml-5">
      <h3 className="mb-3 text-sm md:text-2xl">popular Movies</h3>
      <div className="mb-3 flex items-center space-x-3 overflow-scroll">
        {popularMovies.map((popularMovie) => (
          <img
            className="w-[200px] rounded-md object-cover opacity-80 md:w-[300px]"
            src={`${baseUrl}${popularMovie.backdrop_path || poster_path}`}
            alt=""
          />
        ))}
      </div>
      <h3 className="mb-3 text-sm md:text-2xl">popular Kids Movies</h3>
      <div className="mb-3 flex items-center space-x-3 overflow-scroll">
        {popularKidsMovies.map((popularKidsMovie) => (
          <img
            className="w-[200px] rounded-md object-cover opacity-80 md:w-[300px]"
            src={`${baseUrl}${popularKidsMovie.backdrop_path || poster_path}`}
            alt=""
          />
        ))}
      </div>

      <h3 className="mb-3 text-sm md:text-2xl">movies Theatres</h3>
      <div className="flex items-center space-x-3 overflow-scroll">
        {whatmoviesTheatres.map((whatmoviesTheatre) => (
          <img
            className="w-[200px] rounded-md object-cover opacity-80 md:w-[300px]"
            src={`${baseUrl}${whatmoviesTheatre.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}

export default Movies

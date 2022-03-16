import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
function Banner({ popularMovies }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      interval={2000}
    >
      {popularMovies.map((popularMovie) => (
        <div>
          <img
            className="w-full object-cover shadow-inner md:h-[600px]"
            src={`${baseUrl}${popularMovie.backdrop_path || poster_path}`}
            alt=""
          />
          <div className="absolute top-10 ml-5">
            <h2>{popularMovie.original_title || title}</h2>
            <p className="w-[300px] text-sm text-gray-300">
              {popularMovie.overview}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Banner

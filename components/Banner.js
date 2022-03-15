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
        <img
          className="w-full object-cover md:h-[600px]"
          src={`${baseUrl}${popularMovie.backdrop_path || poster_path}`}
          alt=""
        />
      ))}
    </Carousel>
  )
}

export default Banner

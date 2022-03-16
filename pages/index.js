import Head from 'next/head'
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Movies from '../components/Movies'
function index({ popularMovies, popularKidsMovies, whatmoviesTheatres }) {
  return (
    <div className="bg-black text-white">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <Header />
      <Banner popularMovies={popularMovies} />
      <Movies
        popularMovies={popularMovies}
        popularKidsMovies={popularKidsMovies}
        whatmoviesTheatres={whatmoviesTheatres}
      />
    </div>
  )
}

export default index

export const getStaticProps = async () => {
  const [popularMoviesRes, popularKidsMoviesRes, whatMoviesTheatresRes] =
    await Promise.all([
      fetch(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ccd8350b8da5358c7a52349074b2adc2'
      ),
      fetch(
        'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=ccd8350b8da5358c7a52349074b2adc2'
      ),
      fetch(
        'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=ccd8350b8da5358c7a52349074b2adc2'
      ),
    ])
  const [popularMovies, popularKidsMovies, whatmoviesTheatres] =
    await Promise.all([
      popularMoviesRes.json(),
      popularKidsMoviesRes.json(),
      whatMoviesTheatresRes.json(),
    ])
  return {
    props: {
      popularMovies: popularMovies.results,
      popularKidsMovies: popularKidsMovies.results,
      whatmoviesTheatres: whatmoviesTheatres.results,
    },
  }
}

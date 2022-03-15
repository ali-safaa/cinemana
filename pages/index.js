import Head from 'next/head'
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Movies from '../components/Movies'
function index({ popularMovies, popularKidsMovies, bestDramas }) {
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
        bestDramas={bestDramas}
      />
    </div>
  )
}

export default index

export const getStaticProps = async () => {
  const [popularMoviesRes, popularKidsMoviesRes, bestDramasRes] =
    await Promise.all([
      fetch(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ccd8350b8da5358c7a52349074b2adc2'
      ),
      fetch(
        'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=ccd8350b8da5358c7a52349074b2adc2'
      ),
      fetch(
        'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=ccd8350b8da5358c7a52349074b2adc2'
      ),
    ])
  const [popularMovies, popularKidsMovies, bestDramas] = await Promise.all([
    popularMoviesRes.json(),
    popularKidsMoviesRes.json(),
    bestDramasRes.json(),
  ])
  return {
    props: {
      popularMovies: popularMovies.results,
      popularKidsMovies: popularKidsMovies.results,
      bestDramas: bestDramas.results,
    },
  }
}

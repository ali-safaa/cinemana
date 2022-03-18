import { useSession } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Movies from '../components/Movies'
function index({ popularMovies, popularKidsMovies, whatmoviesTheatres }) {
  const { data: session } = useSession()
  return (
    <div className="font bg-black text-white">
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
        `https://api.themoviedb.org/3/${process.env.MOST_POPLUAR_MOVIES}&${process.env.API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/${process.env.MOST_POPLUAR_MOVIES_KIDS}&${process.env.API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/${process.env.WHAT_MOVIES_THEATER}&${process.env.API_KEY}`
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

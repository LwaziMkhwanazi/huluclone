

import Link from "next/link"
import Head from "next/head"
import Nav from "../components/Nav"
import Results from "../components/Results"
import request from "../utils/request"


export default function Home({movies}) {

  return (
    <>
    <Head>
        <title>Hulu 2.0</title>
    </Head>
        <Nav/>
       <Results movies = {movies}/>
    </>
  )
  
}

export async function getServerSideProps(context){
    const genre = context.query.genre
    const movieRequest = await fetch(`https://api.themoviedb.org/3/${request[genre]?.url || request.fetchTrending.url}`)
    const movies = await movieRequest.json()
    console.log(movies)
  return {
    props:{
      movies:movies.results
    }
  }
}
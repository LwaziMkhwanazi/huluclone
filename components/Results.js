import Thumnail from "./Thumnail"
import FlipMove from "react-flip-move"
function Results({movies}) {

    return (
        <FlipMove className = "px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 grid-cols-3 3xl:flex flex-wrap justify-center">
          {movies.map( (movie) => (<Thumnail key = {movie.id} movie={movie}/>)
          )}
        </FlipMove>
    )
}

export default Results

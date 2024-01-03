import MovieCard from "./MovieCard";
import Row from "react-bootstrap/Row";
const MovieList = (props) => {
    const {movies,title,rating}=props;
    if (title === '' && rating === 0) {
  return (
    <Row> {movies.map((element) => <MovieCard movie={element} key={element.id} />)}</Row>
  )}
  return movies
  .filter(
    element =>
      element.title.toLowerCase().includes(title.toLowerCase().trim()) &&
      element.rating === rating
  )
  .map(element => <MovieCard movie={element} key={element.id} />);
};
;
export default MovieList
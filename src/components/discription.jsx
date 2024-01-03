import React from "react";
import { Link, useParams } from "react-router-dom";

export const Discription = ({ movies }) => {
  const { id } = useParams();
  console.log(id);
  const movie = movies.find((e) => e.id == id);
  console.log(movie);
  return <div>
    <p> {movie.description} </p>
    <iframe src={movie.trailer} width={500} height={500}></iframe>
    <Link to='/'>Home</Link>
    <p>{movie.description}</p> 

  </div>;

};

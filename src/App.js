import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Container from "react-bootstrap/Container";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { Route, Routes } from "react-router-dom";
import { Discription } from "./components/discription";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Never BackDown",
      description:
        "A story of a frustrated and conflicted teenager who  discovers a fight club ",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTkzNDg3MTIyMF5BMl5BanBnXkFtZTcwOTAwNDc1MQ@@._V1_FMjpg_UX1000_.jpg",

      genre: " Action, Thriller, Crime ",
      trailer: "https://www.youtube.com/embed/lEBPNi4bEbc",
      date: "2021-01-15",
      rating: 4,
    },
    {
      id: 2,
      title: "All Quiet on the Western Front",
      description:
        "A terrifying experiences and distress of an young German soldiers on the western front",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/AllQuietSoundtrack.jpg",

      genre: " Action, Thriller, Crime ",
      trailer: "https://www.youtube.com/embed/lEBPNi4bEbc",
      date: "2021-01-15",
      rating: 5,
    },
    {
      id: 3,
      title: "No Escape",
      description:
        "A couple and their two daughters  find themselves caught in a dangerous coup",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/ar/8/8a/No_Escape_%282015_film%29_poster.jpg",

      genre: " Action, Thriller, Crime ",
      trailer: "https://www.youtube.com/embed/lEBPNi4bEbc",
      date: "2021-01-15",
      rating: 4,
    },
    {
      id: 4,
      title: "Face/Off (1997)",
      description:
        "FBI agent Sean Archer assumes the identity of the criminal Castor Troy who murdered his son through facial transplant surgery",
      posterURL: "https://upload.wikimedia.org/wikipedia/ar/e/ef/FACE_OFF.jpg",

      genre: " Action, Thriller, Crime ",
      trailer: "https://www.youtube.com/embed/lEBPNi4bEbc",
      date: "2021-01-15",
      rating: 4,
    },
    {
      id: 5,
      title: "The Joker 2019",
      description:
        " a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming a psychopath ",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/ar/thumb/4/4f/%D9%85%D9%84%D8%B5%D9%82_%D9%81%D9%84%D9%85_%D8%A7%D9%84%D8%AC%D9%88%D9%83%D8%B1_%282019%29.png/260px-%D9%85%D9%84%D8%B5%D9%82_%D9%81%D9%84%D9%85_%D8%A7%D9%84%D8%AC%D9%88%D9%83%D8%B1_%282019%29.png",

      genre: " Action, Thriller, Crime ",
      trailer: "https://www.youtube.com/embed/lEBPNi4bEbc",
      date: "2021-01-15",
      rating: 5,
    },
    {
      id: 6,
      title: "The impossible",
      description:
        "A tourist family caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFtrFwYghPsyWG-S283yFtivHikqlJDRoTZpHERmKb7iKFZ_62K2DumP-TpvWhY4R-MI&usqp=CAU",

      genre: " Action, Thriller, Crime ",
      trailer: "https://www.youtube.com/embed/lEBPNi4bEbc",
      date: "2021-01-15",
      rating: 4,
    },
  ]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <>
      <Container className="mt-3 ">
        <Filter
          title={title}
          setTitle={setTitle}
          rating={rating}
          setRating={setRating}
        />
        <AddMovie setMovies={setMovies} />
       <Routes>
         <Route path="/" element={ <MovieList movies={movies} title={title} rating={rating} />} /> 
        <Route path="/description/:id" element={<Discription movies={movies}/>} /> 
       </Routes>
      </Container>
    </>
  );
}
export default App;

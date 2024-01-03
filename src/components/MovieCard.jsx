import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Rate from "./Rate";
import { Link } from "react-router-dom";
function MovieCard(props) {
  const { movie } = props;
  const { title, description, posterURL } = movie;
  return (
    <Col md={4} sm={6} className="mb-3 ">
      <Link to={"/description/" + movie.id}>
        <Card border="warning" className="text-center">
          <Card.Img variant="top" src={posterURL} height={250} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Rate rating={movie.rating} />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </Col>
  );
}

export default MovieCard;

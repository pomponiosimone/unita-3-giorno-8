import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Gallery = ({ title, movieIds }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const promises = movieIds.map((id) =>
        fetch(`https://www.omdbapi.com/?apikey=8c689d92&i=${id}`)
          .then((response) => response.json())
      );
      try {
        const moviesData = await Promise.all(promises);
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [movieIds]);

  return (
    <div className="my-2">
      <h4>{title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} className="p-2">
            <Card>
              <Link to={`/movie-details/${movie.imdbID}`} className="card-link">
                <Card.Img
                  variant="top"
                  src={movie.Poster}
                  className="img-fluid"
                  style={{ maxHeight: '240px' }}
                  alt={`${movie.Title} Poster`}
                />
              </Link>
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>Released: {movie.Year}</Card.Text>
                <Card.Text>Rating: {movie.imdbRating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;


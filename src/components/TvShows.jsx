import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function TvShows() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
      
        const tvShowIds = ['tt0944947', 'tt0773262', 'tt0903747','tt0903464','tt0903766','tt0903774',]; 
        const promises = tvShowIds.map(id =>
          fetch(`https://www.omdbapi.com/?apikey=8c689d92&i=${id}`)
            .then(response => response.json())
        );

        const tvShowsData = await Promise.all(promises);
        setTvShows(tvShowsData);
      } catch (error) {
        console.error('Errore durante il recupero delle serie TV:', error);
      }
    };

    fetchTvShows();
  }, []);

  return (
    <div>
      <h4 className="text-light">Tv Shows</h4>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {tvShows.map(show => (
          <Col key={show.imdbID}>
            <Card>
              <Card.Img variant="top" src={show.Poster} alt={show.Title} />
              <Card.Body>
                <Card.Title>{show.Title}</Card.Title>
                <Card.Text>Year: {show.Year}</Card.Text>
                <Card.Text>IMDb Rating: {show.imdbRating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TvShows;
import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';

const News = (props) => {
      const { title, description,urlToImage ,publishedAt} = props.article
      return (

            // <Card>
            //       <Card.Header>Featured</Card.Header>
            //       <Card.Body>
            //       <Card.Title>{title}</Card.Title>

            //       <Card.Text>{description}</Card.Text>
            //       <Button variant="primary">Go somewhere</Button>
            //       </Card.Body>
            // </Card>
            <CardGroup>
                  <Card >
                        <Card.Img variant="top"  src={urlToImage} />
                        <Card.Body>
                              <Card.Title>{title}</Card.Title>
                              <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                              <small className="text-muted mb-2">{publishedAt}</small>
                        </Card.Footer>
                  </Card>
                  
            </CardGroup>
      );
};

export default News;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function CardsDogs({url,descripcion,nombre,color,raza}) {
  return (
    <Card style={{ width: '18rem' }} className='justify-center mx-2 my-2'>
      <Card.Img variant="top" src={url} />
      <Card.Body className ="text-center">
        <Card.Title >{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Tags color={color} texto={raza}/>
      </Card.Body>
    </Card>
  );
}

export default CardsDogs;
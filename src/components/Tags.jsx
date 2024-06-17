import React from "react";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Tags({texto,color}) {
  return (
    <Stack direction="horizontal" gap={2} className ="justify-content-center">
      <Badge bg={color} className ="text-center w-100 " >{texto}</Badge>
    </Stack>
  );
}

export default Tags;
import React from 'react';
//If you prefer to use React components instead of plain Bootstrap classes, 
// install React-Bootstrap, a library that wraps Bootstrap components in React-friendly syntax.
//npm install react-bootstrap
//https://react-bootstrap.netlify.app/docs/components/accordion

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
function ReactBootstrap() {
    return (
        <div>
         <div className="container text-center mt-5">
            <Button variant="primary">React-Bootstrap Button</Button>
         </div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
    );
}
export default ReactBootstrap;

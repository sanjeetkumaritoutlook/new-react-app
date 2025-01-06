import React from 'react';
//npm install bootstrap
//plain Bootstrap classes
//https://www.geeksforgeeks.org/how-to-install-bootstrap-in-react-js/
//npm install bootstrap-icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Optional for icons

function NormalBootstrap() {
    return (
        <div>
        <div className="container">
        <h1 className="text-center text-primary my-4">Welcome to Bootstrap</h1>
        <button className="btn btn-primary">Click Me</button>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3 bg-light">Left Column</div>
          </div>
          <div className="col-md-6">
            <div className="p-3 bg-secondary text-white">Right Column</div>
          </div>
        </div>
      </div>
         <div className="d-flex flex-column flex-md-row">
        <div className="p-2">Item 1</div>
        <div className="p-2">Item 2</div>
        <div className="p-2">Item 3</div>
        </div>
      </div>
    );
}
export default NormalBootstrap;

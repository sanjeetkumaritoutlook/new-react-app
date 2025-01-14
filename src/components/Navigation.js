import React from 'react';
//npm i react-router-dom
import { BrowserRouter as Router,   Routes,Route, Link } from "react-router-dom";
import PrimeReact from './PrimeReact';
import ReactMUI from './ReactMUI';
import ReactBootstrap from './ReactBootstrap';
import NormalBootstrap from './NormalBootstrap';
import FluidTable from './FluidTable';
import Container from './Container';
function Navigation() {
    return (
        <div>
            <Router>
            <h1>Navigation Links</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/prime-react">PrimeReact</Link>
                        </li>
                        <li>
                            <Link to="/react-mui">React Material UI</Link>
                        </li>
                        <li>
                            <Link to="/react-bootstrap">React Bootstrap</Link>
                        </li>
                        <li>
                            <Link to="/normal-bootstrap">Normal Bootstrap</Link>
                        </li>  
                        <li>
                            <Link to="/fluid-table">FLUID Table</Link>
                        </li>   
                        <li>
                            <Link to="/parent-child">Forward Ref</Link>
                        </li>   
                    </ul>
                </nav>
                <Routes>
                    <Route path="/prime-react" element={<PrimeReact />} />
                    <Route path="/react-mui" element={<ReactMUI />} />
                    <Route path="/react-bootstrap" element={<ReactBootstrap />} />
                    <Route path="/normal-bootstrap" element={<NormalBootstrap />} />
                    <Route path="/fluid-table" element={<FluidTable />} />
                    <Route path="/parent-child" element={<Container />} />
                </Routes>
            </Router>
        </div>
    );
}
export default Navigation;

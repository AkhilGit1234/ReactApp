import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import data from'./data.json';




const createEventsElement = 

<div
 //className="create-Button float-right"

 style={{
   display:'flex',
   backgroundColor:"#fff",
 justifyContent:"flex-end",
 padding:10
}}
 >
  
  <div><Button  variant="success">Add Question</Button>{' '}</div>


</div>


const table = data.fields.map((a, i) =>
<div key={i}>
<tr>
      <td>{i+1}</td>
      <td>{a.name}</td>
      <td>{a.fieldType}</td>
      <td><Button variant="primary">Edit</Button>{' '}</td>
    </tr>
</div> 
)




function App() {
  return (
    <div className="App">
     
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Outreach</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Dashboard</Nav.Link>
      <Nav.Link href="#features">Events</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {createEventsElement}

      <div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Questions</th>
      <th>Total No Answers</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {table}
  </tbody>
</Table>

        
      </div>
    </div>
  );
}

export default App;

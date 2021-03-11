import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import HeaderTabs from './components/HeaderTabs'

import './App.css'

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To Github Search</h1>
      <HeaderTabs>
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label>Search Term</Form.Label>
            <Form.Control type="text" placeholder="Enter search term"/>
            <Form.Text className="text-muted">
              What do you want to search for on Github?
            </Form.Text>
          </Form.Group>


          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </HeaderTabs>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Path</th>
            <th>Link</th>
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
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  </Container>
)

export default App

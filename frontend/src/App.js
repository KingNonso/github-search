import React, { useState } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import axios from 'axios'

import './App.css'

const App = () => {
  const [tab, setTab] = useState('js')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [results, setResults] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const handleChange = (e) => {
    // const name = e.target.name
    const value = e.target.value
    setSearchTerm(value)
  }

  const  searchGithub = async (e) => {
    e.preventDefault()
    if (searchTerm === ''){
      setError('Search term cannot be empty. Please enter a value');
      return
    }
    // whenever we start a new request
    setLoading(true)
    setError(false)

     await axios({
      method: 'GET',
      url: 'github/', //  http://localhost:8000/
      params: { file: tab, search: searchTerm },
    }).then(res => {
      console.log(...res.data.items)
      setResults([...res.data.items])
      setHasMore(res.data.incomplete_results)
      setLoading(false)
    }).catch(e => {
      setError(true)
    })

  }

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To Github Search</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={tab}
          onSelect={(k) => setTab(k)}
        >
          <Tab eventKey="js" title="Javascript">
            <p>Search for <b>JS</b> items</p>
          </Tab>
          <Tab eventKey="css" title="CSS">
            <p>Search for <b>css</b> items </p>
          </Tab>
          <Tab eventKey="html" title="HTML">
            <p>Search for <b>html</b> items </p>
          </Tab>
        </Tabs>
        <Form data-testid="form" onSubmit={searchGithub}>
          <Form.Group controlId="formSearch">
            <Form.Label>Search Term</Form.Label>
            <Form.Control type="text" value={searchTerm} id="text1" onChange={handleChange} placeholder="Enter search term"/>
            <Form.Text className="text-muted">
              What do you want to search for on Github?
            </Form.Text>
          </Form.Group>

          {loading ? (
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only">Loading...</span>
                Working...
              </Button>

            ) : (
            <Button variant="primary" type="submit" onClick={searchGithub}>
            Search
            </Button>
            )}

          {error && (<><p className="red-text">Error: {error}</p> </>)}
          {hasMore && (<><p className="red-text">API call rate was exceeded by this request</p> </>)}


        </Form>

      </Jumbotron>
      <Row md={12}>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
            <tr>
              {/*<th>#</th>*/}
              <th>Name</th>
              <th>Path</th>
              <th>Link</th>
            </tr>
            </thead>
            <tbody>
            {results.map(item => {
              return (
                <tr key={item.sha}>
                  {/*<td>{item.sha}</td>*/}
                  <td>{item.name}</td>
                  <td>{item.path}</td>
                  <td><a href={item.html_url}>Link</a></td>
                </tr>
              )

            })}

            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default App

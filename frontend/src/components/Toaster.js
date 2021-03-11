import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

const Toaster = ({ children }) => {
  const [show, toggleShow] = useState(true)

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Search completed and cached</strong>
        </Toast.Header>
        <Toast.Body>
          We have now cached your search results
          <span role="img" aria-label="tada">
          🎉
        </span>
        </Toast.Body>
      </Toast>
    </>
  )
}
export default Toaster

import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_STORIES } from '../utils/queries.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const styles = {
  card: {
    margin: 20,
    background: '#9DC0CB',
  },
  title: {
    background: '#2E9CC2',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.8rem',
    textAlign: "center",
    color: 'black',
    padding: '0 20px',
  },
  description: {
    padding: 20,
  },
};

function Stories() {

  const { loading, data } = useQuery(QUERY_STORIES);

  const allStories = data?.stories || [];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="p-5 container">
        <h2>All Stories</h2>
        {
          loading ? (
            <div>loading</div>
          ) : (
            allStories.map((story) => (<div style = {styles.card} key={story._id}>
              <h1 style={styles.title}>{story.title}</h1>
              <p style={styles.description}>{story.description}</p>
              <div>
              <img src={story.image} alt="ripples-of-hope" width="800" height="500"></img>
              


              <Button variant='primary' onClick={handleShow}>Donate</Button>
              
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>We Appreciate Your Kindness!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className='mb-3' controlId='creditCard#'>
                      <Form.Label>Credit Or Debit Card Number</Form.Label>
                      <Form.Control
                        placeholder='Card Number'
                        autoFocus
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='name'>
                      <Form.Label>Full Name On Card</Form.Label>
                      <Form.Control
                        placeholder='Full Name On Card'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='expDate'>
                      <Form.Label>Expiration Date</Form.Label>
                      <Form.Control
                        placeholder='Expiration Date'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='cvv'>
                      <Form.Label>CVV Number</Form.Label>
                      <Form.Control
                        placeholder='CVV Number'
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>Close</Button>
                  <Button variant='primary' onClick={handleClose}>Submit</Button>
                </Modal.Footer>
              </Modal>
              </div></div>))
          )
        }
      </div>
    </>
  )
}
export default Stories;

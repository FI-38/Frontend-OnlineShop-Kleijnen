
import { Form, Button, Modal, Alert, Row, Col } from 'react-bootstrap';


function AddProductModal({show, onCancel, onConfirm}) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Yay submited");
  }
  return (
    <>
      <Modal show={show} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add a product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group as={Row} className="mb-3" controlId="formProductTitle">
              <Form.Label column sm={3}>Product Title</Form.Label>
              <Col sm={9}>
                <Form.Control type='text' name='product_title' placeholder="Nike Air Max 123" required />
              </Col>
          </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDescShort">
              <Form.Label column sm={3}>Description</Form.Label>
              <Col sm={9}>
                <Form.Control as='textarea' name='description' placeholder="Lorem ipsum ipsum" required />
              </Col>
          </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formProductTitle">
              <Form.Label column sm={3}>Price</Form.Label>
              <Col sm={9}>
                <Form.Control type='text' name='price' placeholder="123.45" required />
              </Col>
          </Form.Group>

          </Form>



        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>Go back</Button>
          <Button variant="primary" onClick={onConfirm}>Yes, add product</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProductModal;
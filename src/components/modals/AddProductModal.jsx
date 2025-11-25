
import { Form, Button, Modal, Alert, Row, Col, InputGroup } from 'react-bootstrap';


function AddProductModal({show, onCancel, onConfirm}) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Yay submited, one sec gathering data");

    const form = e.target;
    const productData = {
      product_title: form.product_title.value,
      description: form.description.value,
      price: form.price.value,
      image: form.image.files[0]
    };
    onConfirm(productData);
  }

  const handleImageUpload = () => {
    console.log("Yay you attemptto upload file.")
  }
  return (
    <>
      <Modal show={show} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add a product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} id="addProductForm">

            <Form.Group as={Row} className="mb-3" controlId="formProductTitle">
              <Form.Label column sm={3}>Product Title</Form.Label>
              <Col sm={9}>
                <Form.Control type='text' name='product_title' placeholder="Nike Air Max 123" required />
              </Col>
          </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDescription">
              <Form.Label column sm={3}>Description</Form.Label>
              <Col sm={9}>
                <Form.Control as='textarea' name='description' placeholder="Lorem ipsum ipsum" required />
              </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPrice">
            <Form.Label column sm={3}>Price</Form.Label>
            <Col sm={9}>
              <InputGroup>
                <InputGroup.Text>€</InputGroup.Text>
                <Form.Control type='text' name='price' placeholder="123.45" required />
              </InputGroup>
            </Col>
          </Form.Group>

         <Form.Group as={Row} className="position-relative mb-3">
            <Form.Label column sm={3}>File</Form.Label>
            <Col sm={9}>
              <Form.Control type="file" required name="image" onChange={handleImageUpload} />
            </Col>
          </Form.Group>



          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>Go back</Button>
          <Button variant="primary" form='addProductForm' type='submit'>Yes, add product</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProductModal;

// check if it reaches button on click, othrewise add id / name, see präsi
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";

function EditProductModal({ show, onClose, product, onSave, onDelete }) {
  
  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedProductData = {
        product_name: e.target.product_name.value,
        product_description: e.target.product_description.value,
        product_price: e.target.product_price.value
    };

    onSave(editedProductData);
  };

  return (
    <Modal show={show} onHide={onClose}>

      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <Form id="editProductForm" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Title</Form.Label>
            <Col sm={9}>
              <Form.Control defaultValue={product.product_name} name="product_name" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Description</Form.Label>
            <Col sm={9}>
              <Form.Control as="textarea" defaultValue={product.product_description} name="product_description" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Price</Form.Label>
            <Col sm={9}>
              <InputGroup>
                <InputGroup.Text>€</InputGroup.Text>
                <Form.Control defaultValue={product.product_price} name="product_price" required />
              </InputGroup>
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Label>New image (optional)</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={() => onDelete(product.productID)}>Delete</Button>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" form="editProductForm" type="submit">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProductModal;

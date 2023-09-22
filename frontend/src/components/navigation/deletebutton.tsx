import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

interface DeleteButtonProps {
  onDeleteRequest: () => void;
}

function DeleteButton(props: DeleteButtonProps) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = useCallback(() => {
    props.onDeleteRequest();
    handleClose();
  } , [props]);

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete Item
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>Delete!</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }

export default DeleteButton;
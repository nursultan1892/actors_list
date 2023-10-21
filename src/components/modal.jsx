import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

function ModalComp(props) {
  const { className, known_for } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Button color="info" onClick={toggle}>
        More Info
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Modal title
        </ModalHeader>
        {known_for.map((item) => {
          return (
            <ModalBody key={item.id}>
              <h3>{item.original_title || item.name}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                alt=""
              />
              <p>{item.overview}</p>
            </ModalBody>
          );
        })}
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComp;

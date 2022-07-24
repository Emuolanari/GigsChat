import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormContext } from '../../pages/_app';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPerson, faEnvelope} from "@fortawesome/free-solid-svg-icons"
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FormModal() {
    const {isFormVisible, setIsFormVisible} = useContext(FormContext); 
  return (
    <Modal show={isFormVisible} onHide={()=>setIsFormVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Tell Us More</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="mb-5">
        {/* <FontAwesomeIcon className="p-2 position-absolute" icon={faPerson}/> */}
          <input type="text" className="form-control input-lg"/>
          <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Your Name</label>
        </div>
        <div className="mb-5">
        {/* <FontAwesomeIcon className="p-2 position-absolute" icon={faEnvelope}/> */}
          <input type="email" className="form-control input-lg"/>
          <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Your email</label>
        </div>
        <div className="mb-5">
          <select className="form-select">
            {/* <option selected>Open this select menu</option> */}
            <option selected value="Client">Client</option>
            <option value="Creator">Creator</option>
          </select>
          <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Intended Use</label>
        </div>
        <div className="mb-5">
        {/* <FontAwesomeIcon className="p-2 position-absolute" icon={faInstagram}/> */}
          <input type="text" className="form-control input-lg"/>
          <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Your Social Media @</label>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setIsFormVisible(false)}>Close</Button>
        <Button style={{backgroundColor:'#0bc5b9'}}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
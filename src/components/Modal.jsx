import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormContext } from '../../pages/_app';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPerson, faEnvelope} from "@fortawesome/free-solid-svg-icons"
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FormModal() {
  const {isFormVisible, setIsFormVisible} = useContext(FormContext); 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [intendedUse, setIntendedUse] = useState('')
  const [socialHandle, setSocialHandle] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    console.log('intendedUse', intendedUse);
  }
  return (
    <Modal show={isFormVisible} onHide={()=>setIsFormVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Tell Us More</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div className="mb-5 text-danger">{error && error}</div>
        <div className="mb-5">
        {/* <FontAwesomeIcon className="p-2 position-absolute" icon={faPerson}/> */}
          <input type="text" className="form-control" id='form-name' onChange={(e)=>setName(e.target.value)} required/>
          <label data-error="wrong" data-success="right" htmlFor="form-name">Your Name</label>
        </div>
        <div className="mb-5">
        {/* <FontAwesomeIcon className="p-2 position-absolute" icon={faEnvelope}/> */}
          <input type="email" className="form-control input-lg" id='form-email' onChange={(e)=>setEmail(e.target.value)} required/>
          <label data-error="wrong" data-success="right" htmlFor="form-email">Your email</label>
        </div>
        <div className="mb-5">
          <select className="form-select" id='form-select' defaultValue={'Client'} onChange={(e)=>setIntendedUse(e.target.value)} required>
            {/* <option selected>Open this select menu</option> */}
            <option value="Client">Client</option>
            <option value="Creator">Creator</option>
          </select>
          <label data-error="wrong" data-success="right" htmlFor="form-select">Intended Use</label>
        </div>
        <div className="mb-5">
        {/* <FontAwesomeIcon className="p-2 position-absolute" icon={faInstagram}/> */}
          <input type="text" className="form-control input-lg" id="form-socials" onChange={(e)=>setSocialHandle(e.target.value)}/>
          <label data-error="wrong" data-success="right" htmlFor="form-socials">Your Social Media @</label>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setIsFormVisible(false)}>Close</Button>
        <Button style={{backgroundColor:'#0bc5b9'}} onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormContext } from '../../pages/_app';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPerson, faEnvelope} from "@fortawesome/free-solid-svg-icons"
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FormModal() {
  const {isFormVisible, setIsFormVisible, email} = useContext(FormContext); 
  const [name, setName] = useState('')
  const [updatedEmail, setUpdatedEmail] = useState(email||'') 
  const [intendedUse, setIntendedUse] = useState('')
  const [socialHandle, setSocialHandle] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async ()=>{
    setError('')
    setSuccess('')
    if (!name) {setError('Please enter your name'); return}
    if (!updatedEmail) {setError('Please enter your email'); return}
    if (!intendedUse) {setError('Please select inteded use'); return}
    else{
      try{
        //best to put in an environment variable
          const res = await fetch(`https://idjyr75h.directus.app/items/Waitlist`,{
              method:"POST",
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
                      "Name": name,
                      "email_address": email,
                      "Intended_Use": intendedUse,
                      "Social_Media_Handle": socialHandle
    
                  }
              )
              
          })
          const data = await res.json()
          
          if (res.status==200) {setSuccess("Successfully joined waitlist!")}
          else{setError(data.errors[0].message); return}
  
          return data;
  
      }
      catch(e){
          console.error(e);
      }

    }
}
  return (
    <Modal show={isFormVisible} onHide={()=>setIsFormVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Tell Us More</Modal.Title>
      </Modal.Header>

      <form onSubmit={(e)=>handleSubmit(e)}>
        <Modal.Body>
          <div className="mb-5 text-danger">{error && error}</div>
          <div className="mb-5 text-success">{success && success}</div>
          <div className="mb-5">
            {/*
            <FontAwesomeIcon className="p-2 position-absolute" icon={faPerson} /> */}
            <input type="text" className="form-control" id='form-name' onChange={(e)=>setName(e.target.value)}
            required/>
            <label data-error="wrong" data-success="right" htmlFor="form-name">Your Name</label>
          </div>
          <div className="mb-5">
            {/*
            <FontAwesomeIcon className="p-2 position-absolute" icon={faEnvelope} /> */}
            <input type="email" value={updatedEmail} className="form-control input-lg" id='form-email'
              onChange={(e)=>setUpdatedEmail(e.target.value)} required/>
            <label data-error="wrong" data-success="right" htmlFor="form-email">Your email</label>
          </div>
          <div className="mb-5">
            <select className="form-select" id='form-select' onChange={(e)=>setIntendedUse(e.target.value)} required>
              <option selected>Select Intented Use</option>
              <option value="Client">Client</option>
              <option value="Creator">Creator</option>
            </select>
            <label data-error="wrong" data-success="right" htmlFor="form-select">Intended Use</label>
          </div>
          <div className="mb-5">
            {/*
            <FontAwesomeIcon className="p-2 position-absolute" icon={faInstagram} /> */}
            <input type="text" className="form-control input-lg" id="form-socials"
              onChange={(e)=>setSocialHandle(e.target.value)}/>
            <label data-error="wrong" data-success="right" htmlFor="form-socials">Your Social Media @</label>
          </div>


        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setIsFormVisible(false)}>Close</Button>
          <Button style={{backgroundColor:'#0bc5b9'}} type='submit'>Submit</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
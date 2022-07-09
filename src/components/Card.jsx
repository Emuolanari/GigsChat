import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Card({name, story, imgSrc}) {
  return (
    <div className='col'>
    <div className="card shadow p-3" style={{ minWidth: '18rem' }}>
    <Image src= {imgSrc} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{story}</p>
      <div className="card-footer d-flex justify-content-between">
      <FontAwesomeIcon className="fa-lg" icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />

      </div>
    </div>
  </div>
    </div>
  )
}


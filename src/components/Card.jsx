import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Card({name, story, imgSrc, about}) {
  return (
    <div className='col'>
      <div className="card shadow p-4 mb-3" style={{ minWidth: '16rem', minHeight:'28rem', borderRadius:15 }}>
        <div className="card-body text-center justify-content-center">
          <div className='mx-auto'>
            <Image src={imgSrc} alt="thumbnail" className='rounded-circle img-thumbnail' style={{borderRadius:'50%'}} height={112} width={112}/>
          </div>
          <h5 className="card-title d-flex flex-column mb-4">{name}<span style={{fontSize:13}} className='text-muted'>{about}</span></h5>
          
          <p className="card-text">{story}</p>
          <div className="d-flex justify-content-around">
            <FontAwesomeIcon className="p-2" icon={faInstagram} size={'2x'} />
            <FontAwesomeIcon className="p-2" icon={faFacebook} size={'2x'}/>
            <FontAwesomeIcon className="p-2" icon={faTwitter} size={'2x'}/>

          </div>
        </div>
      </div>
    </div>
  )
}


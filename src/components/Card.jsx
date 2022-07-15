import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faEllipsisV, faHeart} from "@fortawesome/free-solid-svg-icons"

export default function Card({name, story, imgSrc, about, randomFollowersForNow}) {
  return (
    <div className='col d-flex justify-content-center align-items-center'>
      <div className="card shadow p-4 mb-3" style={{width:'92%', minWidth: '16rem', minHeight:'28rem', borderRadius:15 }}>
        <div className="card-body text-center justify-content-center position-relative">
          <FontAwesomeIcon className="p-2 position-absolute" icon={faHeart} color='#FF2395' style= {{top:0, right:20}}/>
          <FontAwesomeIcon className="p-2 position-absolute" icon={faEllipsisV} style= {{top:0, right:0}}/>
          <div className="d-flex align-items-center justify-content-center">
              <Image src={imgSrc} alt="thumbnail" className='img-thumbnail'
                height={100} width={100} style={{borderRadius:'50%'}} objectFit='cover'/>
          {/* <div style={{marginLeft:'30%', marginRight:'auto'}}>
            </div> */}

          </div>
          <h5 className="card-title d-flex flex-column mb-4">{name}<span style={{fontSize:13}} className='text-muted'>{about}</span></h5>
          
          <p className="card-text">{story}</p>
          <div className="d-flex justify-content-around">
            <div className='d-flex flex-column'>
              <FontAwesomeIcon className="p-2" icon={faInstagram} size={'2x'} color={'#AB00D1'} />
              {randomFollowersForNow &&<span style={{fontFamily:'Raleway', fontWeight:600}}>{randomFollowersForNow}K</span> }
              {randomFollowersForNow&& <span className='text-muted'>Followers</span>}
            </div>
            <div className="d-flex flex-column">
              <FontAwesomeIcon className="p-2" icon={faFacebook} size={'2x'} color={'#0171D4'} />
              {randomFollowersForNow &&<span style={{fontFamily:'Raleway', fontWeight:600}}>{randomFollowersForNow/2}K</span> }
              {randomFollowersForNow&& <span className='text-muted'>Followers</span>}
            </div>

            <div className="d-flex flex-column">
              <FontAwesomeIcon className="p-2" icon={faTwitter} size={'2x'} color={'#05E7EF'} />
              {randomFollowersForNow &&<span style={{fontFamily:'Raleway', fontWeight:600}}>{randomFollowersForNow/5}K</span> } 
             {randomFollowersForNow&& <span className='text-muted'>Followers</span>}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}


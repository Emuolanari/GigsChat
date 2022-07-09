import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import WaitingListBtn from './WaitingListBtn';

export default function Footer() {
  return (
    <footer className="text-center text-lg-center text-dark mt-5">
        <h1 className='pt-5 mb-5'>You can join the waitlist</h1>
        <div className='justify-content-center ' style={{display:'flex'}}>
            <input style={{minHeight:40, minwidth:470}} type="text" placeholder='Enter email address' />
            <WaitingListBtn passedColor={'#000'}/>
        </div>
        <div className="text-center p-4">
        © 2022 GigsChat, All rights reserved.
        </div>

  </footer>
  )
}

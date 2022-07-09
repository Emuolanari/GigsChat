import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import WaitingListBtn from './WaitingListBtn';
import LOGO from './../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className="text-center text-lg-center text-dark mt-5">
        <section className='mt-5' style={{backgroundColor:'#0BC5B9', minHeight:400}}>
            <h1 className='pt-5 mb-5'>You can join the waitlist</h1>
            <div className='justify-content-center pb-5' style={{display:'flex'}}>
                <input className='border-0' style={{minHeight:40, minwidth:470}} type="text" placeholder='Enter email address' />
                <WaitingListBtn passedColor={'#000'} />
            </div>
        </section>

        <section className="bg-dark text-white text-center d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
            <span>GigsChat</span>
          </div>
          <div className="me-5 d-none d-lg-block">
            <span>© 2022 GigsChat, All rights reserved.</span>
          </div>
          <div>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon className="fa-lg me-3 fa-fw" icon={faFacebook} />
            </a>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>
  </footer>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import WaitingListBtn from './WaitingListBtn';
import Logo from './Logo';
import FooterBG from './../assets/footerbg.png'
import { useContext } from 'react';
import { FormContext } from '../../pages/_app';

export default function Footer() {
  const {setEmail} = useContext(FormContext); 
  return (
    <footer className="text-center text-lg-center text-dark mt-5 align-content-center" style={{height:'100%'}}>
        <section className='mt-5 d-flex flex-column justify-content-center' style={{backgroundColor:'#0BC5B9',backgroundImage: `url(${FooterBG.src})`, backgroundRepeat: 'no-repeat',backgroundSize: '100%', minHeight:400}}>
            <h1 className='pt-5 mb-5' style={{fontFamily: 'Raleway'}}>You can join the waitlist</h1>
            <div className='justify-content-center mx-4 pb-5' style={{display:'flex'}}>
                <input className='border-0 customInput' type="text" placeholder='Enter email address' onChange={(e)=>setEmail(e.target.value)}/>
                <WaitingListBtn passedColor={'#000'} />
            </div>
        </section>

        <section className="bg-dark text-white text-center d-flex justify-content-center justify-content-lg-between p-4">
        <div className="me-5 d-none d-lg-block">
            <span><Logo fill={'#fff'}/></span>
          </div>
          <div className="me-5 d-none d-lg-block">
            <span className='text-muted'>© 2022 GigsChat, All rights reserved.</span>
          </div>
          <div>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} size={'2x'}/>
            </a>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} size={'2x'}/>
            </a>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebook} size={'2x'}/>
            </a>
            <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} size={'2x'}/>
            </a>
          </div>
        </section>
  </footer>
  )
}

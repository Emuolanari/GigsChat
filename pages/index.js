import Image from 'next/image'
import Card from '../src/components/Card'
import WaitingListBtn from '../src/components/WaitingListBtn'
import GroupGirl from './../src/assets/GroupGirl.png'
import NigerGirl from './../src/assets/NigerGirl.png'
import HeadphoneGirl from './../src/assets/headphoneGirl.png'
import whiteWoman from './../src/assets/whiteWoman.jpg'
import MiniCard from '../src/components/MiniCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock, faPeopleGroup, faCalendar, faFunnelDollar, faBell, faSquareH, faCirclePlay} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <div className=' mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-flex flex-column justify-content-start h-100'>
              <h1 className='headings' style={{fontFamily: 'Raleway'}}>Find, connect with, and hire your favourite influencers and creators
              </h1>
              <p className='pt-4 pb-4'>The platform for the Business of Social Media. we help with scheduling bookings,
                secure payments,
                conversations and dispute management</p>
              <div style={{display:'flex'}} id='inputCol'><input style={{ border: '1px solid gray'}} type="text"
                  placeholder='Enter email address' />
                <WaitingListBtn passedColor={'#0bc5b9'} />
              </div>
            </div>

          </div>
          <div className='col'>
            <Image src={GroupGirl} alt="girl" objectFit='contain' />
          </div>
          <div style={{display:'flex'}} id='inputRow'><input  style={{ border: '1px solid gray'}} type="text"
              placeholder='Enter email address' />
            <WaitingListBtn passedColor={'#0bc5b9'} />
          </div>
        </div>

      </div>

      <div className='container mt-5'>
        <div className='row justify-content-center text-center'>
          <h1 className='headings pb-4' style={{fontFamily: 'Raleway'}}>Watch demo video</h1>
          <Image src={NigerGirl} width = {600} height= {400} alt='girl2' layout='intrinsic'/>
        </div>
      </div>


      <div className='container mt-5'>
        <div className='row'>
          <div className="col">
            <h1 className='headings' style={{fontFamily: 'Raleway'}}>From conversations, agreeing and tracking objectives, to payments, all in one place</h1>
          </div>
          <div className="col">

          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className="row justify-content-center">
          <h1 style={{fontFamily: 'Raleway'}} className='headings text-center'>Choose from multiple influencer categories</h1>
          <Card name={'Tunde Ajayi'} 
          story ={'Using GigsChat allowed me to speak to only financially commited clients and manage their expectations easily'} 
          imgSrc={HeadphoneGirl} about={'Up and coming photographer'}/>
          <Card name={'Aisha Ahmed'} 
          story ={'GigsChat allowed me find influencers that fit my marketing budget and have the audience reach I require'} 
          imgSrc={NigerGirl} about={'Marketing manager, Big Brand Inc.'}/>
          <Card name={'Amara Elechi'} 
          story ={'I never have to worry about getting my payments, as they are done securely through GigsChat'} 
          imgSrc={whiteWoman} about={'Dancer and tiktok influencer'} />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
        <h1 className='headings text-center' style={{fontFamily: 'Raleway'}}>Built for convenience and allows you focus on what really matters</h1>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col position-relative">
              <div style={{minWidth: '100%', minHeight: '100%'}}>
                <Image src={HeadphoneGirl} alt="girl" objectFit='contain' layout='fill'/>
              </div>
          
          </div>

          <div className="col">
            <h1 className='headings' style={{fontFamily: 'Raleway'}}>Benefits of using GigsChat</h1>
            <div className="d-flex">
              <MiniCard title={'We help filter only committed clients'} body={'Only speak to financially committed potential clients'} icon={faFunnelDollar}/>
              <MiniCard title={'Set and complete project milestone'} body={'Set, track and complete project objectives easily'} icon={faCalendar}/>
            </div>
            <div className="d-flex">
              <MiniCard title={'Notifications and reminders'} body={'Only speak to financially committed potential clients'} icon={faBell}/>
              <MiniCard title={'Secure transactions'} body={'Set, track and complete project objectives easily'} icon={faLock}/>
            </div>
            <div className="d-flex">
              <MiniCard title={'Dispute management'} body={'Dispute resolution team on hand to resolve any disputes between interacting parties'} icon={faPeopleGroup}/>
              <MiniCard title={'Scheduling and booking'} body={'Publish or restrict your availability, only get booked at your own pace'} icon={faSquareH}/>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1 className='headings' style={{fontFamily: 'Raleway'}}>An Ecosystem of the business of Social Media</h1>
          </div>
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  )
}

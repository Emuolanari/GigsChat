import Image from 'next/image'
import Card from '../src/components/Card'
import WaitingListBtn from '../src/components/WaitingListBtn'
import GroupGirl from './../src/assets/GroupGirl.png'
import NigerGirl from './../src/assets/NigerGirl.png'
import HeadphoneGirl from './../src/assets/headphoneGirl.png'
import ThumbNailGirl from './../src/assets/thumbnailgirl.png'
import MiniCard from '../src/components/MiniCard'
import {faLock, faPeopleGroup, faCalendar, faFunnelDollar, faBell, faSquareH, faCirclePlay} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <div className=' mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
            <div className='d-flex flex-column justify-content-start h-100 mt-5'>
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
          <div className='col-md'>
            <Image className='img-responsive' src={GroupGirl} alt="girl" objectFit='contain' />
          </div>
        </div>

      </div>

      <div className="container-fluid simple-linear mt-5">
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <h1 className='headings pb-4' style={{fontFamily: 'Raleway'}}>Watch demo video</h1>
            <Image src={NigerGirl} width = {600} height= {400} alt='girl2' layout='intrinsic'/>
          </div>
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
          imgSrc={ThumbNailGirl} about={'Dancer and tiktok influencer'} />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
        <h1 className='headings text-center' style={{fontFamily: 'Raleway'}}>Built for convenience and allows you focus on what really matters</h1>
        </div>
      </div>

      <div className="container-fluid simple-linear mt-5">
        <div className="container">
            <div className="row">
              <div className="col-lg">
                <div className='d-flex' style={{minWidth: '100%', minHeight: '90%'}}>
                    <Image src={HeadphoneGirl} alt="girl"  className='img-responsive' objectFit='cover'/>
                </div>
              </div>
              <div className="col-lg">
                <h1 className='headings mt-4 mb-4 text-center' style={{fontFamily: 'Raleway'}}>Benefits of using GigsChat</h1>
                <div className="miniCards">
                  <MiniCard title={'We help filter only committed clients'} body={'Only speak to financially committed potential clients'} icon={faFunnelDollar} iconColor={'#0BC5B9'}/>
                  <MiniCard title={'Set and complete project milestone'} body={'Set, track and complete project objectives easily'} icon={faCalendar} iconColor={'#FFAC0E'}/>
                </div>
                <div className="miniCards">
                  <MiniCard title={'Notifications and reminders'} body={'Only speak to financially committed potential clients'} icon={faBell} iconColor={'#FD52AB'}/>
                  <MiniCard title={'Secure transactions'} body={'Set, track and complete project objectives easily'} icon={faLock} iconColor={'#8C3AAA'}/>
                </div>
                <div className="miniCards">
                  <MiniCard title={'Dispute management'} body={'Dispute resolution team on hand to resolve any disputes between interacting parties'} icon={faPeopleGroup} iconColor={'#3748C4'}/>
                  <MiniCard title={'Scheduling and booking'} body={'Publish or restrict your availability, only get booked at your own pace'} icon={faSquareH} iconColor={'#38C069'}/>
                </div>
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

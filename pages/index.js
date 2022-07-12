import Image from 'next/image'
import Card from '../src/components/Card'
import WaitingListBtn from '../src/components/WaitingListBtn'
import GroupGirl from './../src/assets/GroupGirl.png'
import NigerGirl from './../src/assets/NigerGirl.png'
import HeadphoneGirl from './../src/assets/headphoneGirl.png'
import ThumbNailGirl from './../src/assets/thumbnailgirl.png'
import WomanOnMobile from './../src/assets/womanonmobile.png'
import { useEffect, useState } from 'react'
import WomanOnMobile2 from './../src/assets/womanonmobile2.png'
import MiniCard from '../src/components/MiniCard'
import {faLock, faPeopleGroup, faCalendar, faFunnelDollar, faBell, faSquareH, faPlayCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

  const [time, setTime] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(!time), 2000)
    console.log('time', time);

    return () => {
      clearInterval(interval);
    };
  }, [time])

  return (
    <div className=' mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
            <div className='d-flex flex-column justify-content-start h-100 mt-5'>
              <h1 className='headings' >Find, connect with, and hire your favourite influencers and creators
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
          <div id='demo' className='row justify-content-center text-center'>
            <h2 className='pb-4 pt-4' >Watch demo video</h2>
            <div className='position-relative d-flex justify-content-center' style={{minWidth: 200, width:600, minHeight: '90%'}}>
              <div className='position-absolute' style={{backgroundColor:'rgba(59,60,67,0)', justifyContent:'center', height:80, width:'95.5%', zIndex:20, bottom:0}}>
                <FontAwesomeIcon className="p-2" icon={faPlayCircle} color={'#0BC5B9'} size={'3x'} />
              </div>
              <Image src={NigerGirl} alt='girl2' objectFit='cover'style={{ position:'absolute', bottom:0, borderTopLeftRadius:10, borderTopRightRadius:10 }}/>
            </div>
          </div>
        </div>
      </div>



      <div className='container vertical-center mt-5'>
        <div className='row' style={{height:'100%'}}>
          <div className="col">
            <div className="d-flex flex-column justify-content-center" style={{height:'100%'}}>
              <h2 className='headings'>From conversations, agreeing and tracking objectives, to payments, all in one
                place</h2>
            </div>
          </div>
          <div className="col">
            <div className="d-flex  flex-column">
              <div className="d-flex flex-column align-items-center">
                <div className={`position-relative d-flex ${time? 'customMovingImg1' : 'customMovingImg11' }`}>
                  <div className='mt-5 ovalBackground' style={{backgroundColor:'#00445E'}} />
                  <div className=''>
                    <Image src={WomanOnMobile} alt='iphone' objectFit='cover' width={170} height={170}
                      style={{borderRadius:'50%', position:'absolute', bottom:0 }} />
                  </div>

                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <div className={`position-relative d-flex justify-content-center ${time? 'customMovingImg2'
                  : 'customMovingImg21' }`}>
                  <div className='mt-5 ovalBackground' style={{backgroundColor:'#E48EB1'}} />
                  <div className=''>
                    <Image src={WomanOnMobile2} alt='iphone' objectFit='contain' width={170} height={170}
                      style={{borderRadius:'50%'}} />
                  </div>

                </div>
              </div>




            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className="row justify-content-center">
          <h2 className='headings text-center'>Choose from multiple influencer categories</h2>
          <Card name={'Tunde Ajayi'} 
          story ={'Using GigsChat allowed me to speak to only financially commited clients and manage their expectations easily'} 
          imgSrc={HeadphoneGirl} about={'Up and coming photographer'} randomFollowersForNow={500}/>
          <Card name={'Aisha Ahmed'} 
          story ={'GigsChat allowed me find influencers that fit my marketing budget and have the audience reach I require'} 
          imgSrc={NigerGirl} about={'Marketing manager, Big Brand Inc.'} />
          <Card name={'Amara Elechi'} 
          story ={'I never have to worry about getting my payments, as they are done securely through GigsChat'} 
          imgSrc={ThumbNailGirl} about={'Dancer and tiktok influencer'} randomFollowersForNow={600}/>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2 className='headings text-center'>Built for convenience and allows you focus on what really matters</h2>
            <div>
              {/* <Image src={Iphone} alt='iphone' objectFit='cover' /> */}
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid simple-linear mt-5">
        <div className="container">
            <div className="row">
              <div className="col-lg position-relative d-flex justify-content-center">
                <div className='mt-5 specialBackground'
                   />
                <div className='d-flex' style={{minWidth: '100%', minHeight: '90%'}}>
                  <Image src={HeadphoneGirl} alt="girl" className='img-responsive' objectFit='cover'
                    style={{ zIndex:2, position:'absolute', bottom:0 }} />
                </div>

              </div>
              <div id='benefits' className="col-lg">
                <h2 className='headings mt-4 mb-4 text-center'>Benefits of using GigsChat</h2>
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
            <h2 className='headings'>An Ecosystem of the business of Social Media</h2>
          </div>
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  )
}

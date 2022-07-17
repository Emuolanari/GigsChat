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
import Iphone from './../src/assets/iphone.svg'
import Aisha from './../src/assets/aisha.png'
import CoolGirl from './../src/assets/coolgirl.png'
import Tunde from './../src/assets/tunde.png'
import Richard from './../src/assets/richard.jpg'
import MiniCard from '../src/components/MiniCard'
import { faSquareH, faPlayCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../src/components/Message'
import InitialsMessage from '../src/components/InitialsMessage'
import { Calendar, Lock, People, EditSquare, Filter2, Notification, Play, InfoSquare, TickSquare} from 'react-iconly'

export default function Home() {

  const [timeToChange, setTimeToChange] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => setTimeToChange(!timeToChange), 1500)

    return () => {
      clearInterval(interval);
    };
  }, [timeToChange])

  return (
    <div className=' mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
            <div className='d-flex flex-column justify-content-start h-100 mt-5'>
              <h1 className='headings' style={{ lineHeight:1.5 }} >Find, connect with, and hire your favourite influencers and creators
              </h1>
              <p className='pt-4 pb-4'>The platform for the Business of Social Media. we help with scheduling bookings,
                secure payments,
                conversations and dispute management</p>
              <div style={{display:'flex'}} id='inputCol'><input style={{ border: '1px solid #EEEEEE'}} type="text"
                  placeholder='Enter email address' />
                <WaitingListBtn passedColor={'#0bc5b9'} />
              </div>
            </div>

          </div>
          <div className='col-md'>
              <div className="col-lg position-relative d-flex justify-content-center">
                <div className='position-absolute' style={{zIndex:40, left:3, bottom:3}}>
                  <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review' imgSrc={Richard} color={'rgba(255,255,255,0.9)'} maxW={200} padding={4}/>
                </div>
                <div className='position-absolute' style={{zIndex:40, right:3, bottom:100}}>
                  <Message name='Jenny Wilson' message='No more messages from unserious clients' imgSrc={CoolGirl} color={'rgba(255,255,255,0.9)'} maxW={200} padding={4}/>
                </div>
                <div className='d-flex' style={{minWidth: '100%', minHeight: '90%'}}>
                <Image className='img-responsive' src={GroupGirl} alt="girl" objectFit='contain' />
                </div>

              </div>
          </div>
        </div>

      </div>

      <div className="container-fluid simple-linear">
        <div className='container'>
          <div id='demo' className='row justify-content-center text-center' style={{paddingLeft:0, paddingRight:0 }}>
            <h2 className='pb-4 pt-4' >Watch demo video</h2>
            <div className='position-relative d-flex justify-content-center px-0' style={{minWidth: 200, width:600, minHeight: '90%'}}>
              <div className='position-absolute d-flex align-items-center' style={{backgroundColor:'rgba(58,61,68, 0.8)', justifyContent:'center', height:80, width:'100%', zIndex:20, bottom:0}}>
              <Play set='bulk' primaryColor='white' secondaryColor='#0BC5B9' size='xlarge'/>
              
              </div>
              <Image src={NigerGirl} alt='girl2' objectFit='cover'style={{ position:'absolute', bottom:0, borderTopLeftRadius:10, borderTopRightRadius:10 }}/>
            </div>
          </div>
        </div>
      </div>



      <div className='container vertical-center mt-5 '>
        <div className='row' style={{height:'100%'}}>
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center" style={{height:'100%'}}>
              <h2 className='headings'>From conversations, agreeing and tracking objectives, to payments, all in one
                place</h2>
            </div>
          </div>
          <div className="col-md-6 mb-5 mt-5 adjustedHeight" style={{minHeight:'500px'}}>
              {timeToChange&&<div className='d-flex justify-content-end'>
               <InitialsMessage message='No more messages from unserious clients' initials='Si' color='#FFAC0E' position='left'/>
              </div>}

              <div className="d-flex flex-column align-items-center mb-5">
                <div className={`d-flex`}>
                  <div className={`position-relative d-flex ${!timeToChange ?'align-self-end justify-self-center':'justify-self-start align-self-start'}`}>
                    <div className='mt-5 ovalBackground' style={{backgroundColor:'#00445E'}} />
                    <div className={`d-flex`}>
                        <Image src={WomanOnMobile} alt='woman' objectFit='contain' width={140} height={140}
                          style={{borderRadius:'50%', position:'absolute', zIndex:2, bottom:0}} />
                      </div>
                  </div>
                  <span className={`mt-4 ${timeToChange?'align-self-center':'align-self-end'}`}><InitialsMessage message='Now I always get my full payments when I deliver as expected' initials='Kc' color='#FF2395' position={'left'}/></span>
                </div>

              </div>

              {!timeToChange&&<div className='d-flex justify-content-center mt-4 mb-4'>
               <InitialsMessage message='No more messages from unserious clients' initials='Si' color='#FFAC0E' position='left'/>
              </div>}

              <div className="d-flex flex-column align-items-between">
                
                    <InitialsMessage message='All my project milestones were easy to set, track and review' initials='Cj' color='#37D0C7' position='right'/>
                    <div className={`position-relative d-flex ${!timeToChange? 'customMovingImg2': 'customMovingImg21' }`}>
                      <div className='mt-5 ovalBackground' style={{backgroundColor:'#E48EB1'}} />
                      <div className='d-flex'>
                        <Image src={WomanOnMobile2} alt='woman' objectFit='contain' width={140} height={140}
                          style={{borderRadius:'50%',position:'absolute', zIndex:3, bottom:0}} />
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
          imgSrc={Tunde} about={'Up and coming photographer'} randomFollowersForNow={500}/>
          <Card name={'Aisha Ahmed'} 
          story ={'GigsChat allowed me find influencers that fit my marketing budget and have the audience reach I require'} 
          imgSrc={Aisha} about={'Marketing manager, Big Brand Inc.'} />
          <Card name={'Amara Elechi'} 
          story ={'I never have to worry about getting my payments, as they are done securely through GigsChat'} 
          imgSrc={ThumbNailGirl} about={'Dancer and tiktok influencer'} randomFollowersForNow={600}/>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2 className='headings text-center'>Built for convenience and allows you focus on what really matters</h2>

            <div className="d-flex justify-content-center">
              <div className="position-relative d-flex justify-content-center text-white" style={{width:'50%'}}>
                <div className='position-absolute' style={{zIndex:40, left:-46, bottom:170}}>
                  {timeToChange?
                  <Message name='Jenny Wilson' message='No more messages from unserious clients' imgSrc={CoolGirl}
                    color={'#FFAC0E'} maxW={250} padding={9} />:
                  <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review'
                    imgSrc={Richard} color={'#0BC5B9'} maxW={250} padding={9} />}
                </div>

                {timeToChange?<div className='position-absolute' style={{zIndex:40, right:-20, top:100}}>
                  <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review'
                    imgSrc={Richard} color={'#0BC5B9'} maxW={250} padding={9} />
                </div>:
                (<>
                <div className='position-absolute' style={{zIndex:40, right:-20, top:100}}>
                  <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review'
                    imgSrc={Richard} color={'#0BC5B9'} maxW={250} padding={9} />
                </div>
                <div className='position-absolute' style={{zIndex:1, right:10, top:100}}>
                <Message name='Jenny Wilson' message='No more messages from unserious clients' 
                    color={'#FFAC0E'} maxW={250} padding={9} />
                </div>
                </>
                )
                }
                <div style={{minHeight:'100%'}}>
                  <Image className='img-responsive' src={Iphone} alt="iphone" objectFit='cover' />
                </div>
              </div>


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
                  <MiniCard title={'We help filter only committed clients'} body={'Only speak to financially committed potential clients'} iconColor={'#0BC5B9'}>
                    <Filter2 set='bold' primaryColor='white' secondaryColor='white'/>
                  </MiniCard>
                  <MiniCard title={'Set and complete project milestone'} body={'Set, track and complete project objectives easily'} iconColor={'#FFAC0E'}>
                    <Calendar set='bold' primaryColor='white' secondaryColor='white'/>
                  </MiniCard>
                </div>
                <div className="miniCards">
                  <MiniCard title={'Notifications and reminders'} body={'Get alerts for new activities on your profile and reminders for project milestones.'} iconColor={'#FD52AB'}>
                      <Notification set='bold' primaryColor='white' secondaryColor='white'/>
                  </MiniCard>
                  <MiniCard title={'Secure transactions'} body={'Set, track and complete project objectives easily'} iconColor={'#8C3AAA'}>
                      <Lock set='bold' primaryColor='white' secondaryColor='white'/>
                  </MiniCard>
                </div>
                <div className="miniCards">
                  <MiniCard title={'Dispute management'} body={'Dispute resolution team on hand to resolve any disputes between interacting parties'} iconColor={'#3748C4'}>
                    <People set='bold' primaryColor='white' secondaryColor='white'/>
                  </MiniCard>
                  <MiniCard title={'Scheduling and booking'} body={'Publish or restrict your availability, only get booked at your own pace'} iconColor={'#38C069'}>
                    <TickSquare set='bold' primaryColor='white' secondaryColor='white'/>
                  </MiniCard>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
          <div className="d-flex flex-column justify-content-center" style={{height:'100%'}}>
            <h2 className='headings'>An Ecosystem of the business of Social Media</h2>
          </div>
          </div>
          <div className="col">
            {/* <video src={"/gigsCvid.mp4"} autoPlay muted style={{ width: "80%", height:"100%", outline:'none' }} loop/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

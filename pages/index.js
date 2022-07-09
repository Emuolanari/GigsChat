import Image from 'next/image'
import Card from '../src/components/Card'
import WaitingListBtn from '../src/components/WaitingListBtn'
import GroupGirl from './../src/assets/GroupGirl.png'
import NigerGirl from './../src/assets/NigerGirl.png'
import HeadphoneGirl from './../src/assets/headphoneGirl.png'

export default function Home() {
  return (
    <div className=' mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Find, connect with, and hire your favourite influencers and creators</h1>
            <p>The platform for the Business of Social Media. we help with scheduling bookings, secure payments,
              conversations and dispute management</p>
            <div style={{display:'flex'}}><input style={{minHeight:40}} type="text" placeholder='Enter email address' />
              <WaitingListBtn passedColor={'#0bc5b9'}/></div>
          </div>
          <div className='col'>
            <Image src={GroupGirl} alt="girl" objectFit='contain' />
          </div>
        </div>

      </div>

      <div className='container mt-5'>
        <div className='row justify-content-center text-center'>
          <h1 className='pb-4'>Watch demo video</h1>
          <Image src={NigerGirl} width = {600} height= {400} alt='girl2' layout='intrinsic'/>
        </div>
      </div>


      <div className='container mt-5'>
        <div className='row'>
          <div className="col">
            <h1>From conversations, agreeing and tracking objectives, to payments, all in one place</h1>
          </div>
          <div className="col">

          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className="row justify-content-center">
          <h1 className='text-center'>Choose from multiple influencer categories</h1>
          <Card name={'Tunde Ajayi'} story ={'Using GigsChat allowed me to speak to only financially commited clients and manage their expectations easily'} imgSrc={HeadphoneGirl}/>
          <Card name={'Aisha Ahmed'} story ={'GigsChat allowed me find influencers that fit my marketing budget and have the audience reach I require'} imgSrc={NigerGirl}/>
          <Card name={'Amara Elechi'} story ={'I never have to worry about getting my payments, as they are done securely through GigsChat'} imgSrc={HeadphoneGirl}/>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
        <h1 className='text-center'>Built for convenience and allows you focus on what really matters</h1>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
          <Image src={HeadphoneGirl} alt="girl" objectFit='contain' />
          </div>

          <div className="col">
            <h1>Benefits of using GigsChat</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>An Ecosystem of the business of Social Media</h1>
          </div>
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  )
}

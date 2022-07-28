import Image from "next/image";
import { useEffect, useState } from "react";
import InitialsMessage from "./InitialsMessage";
import WomanOnMobile2 from './../assets/womanonmobile2.png'
import WomanOnMobile from './../assets/womanonmobile.png'
export default function FirstAnimation() {
  //can create custom hook if time since used for all three animations
    const [timeToChange, setTimeToChange] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => setTimeToChange(!timeToChange), 1500)
  
      return () => {
        clearInterval(interval);
      };
    })
  return (
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
  )
}


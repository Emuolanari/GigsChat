import Image from "next/image"
import { useEffect, useState } from "react";
import Message from "./Message"
import CoolGirl from './../assets/coolgirl.png'
import Richard from './../assets/richard.jpg'
import Iphone from './../assets/iphone.svg'
import Iphone2 from './../assets/iphone2.svg'

function SecondAnimation() {
    //check https://www.npmjs.com/package/react-spring for animating cards
    //https://www.youtube.com/watch?v=kT6yYSwK1oA&ab_channel=BiteSizeAcademy

    const [timeToChange, setTimeToChange] = useState(2);
    useEffect(() => {
        const interval = setInterval(() => setTimeToChange(!timeToChange), 1500)
    
        return () => {
          clearInterval(interval);
        };
      }, [timeToChange])

  return (
    <div className="d-flex justify-content-center text-white">
        <div style={{maxWidth:'100%',maxHeight:'100%', height: 'auto', position:'relative'}}>
            <div className='position-absolute' style={{zIndex:4, left:-120, bottom:170}}>
                {timeToChange?
                <Message name='Jenny Wilson' message='No more messages from unserious clients' imgSrc={CoolGirl}
                    color={'#FFAC0E'} maxW={250} padding={9} />:
                <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review'
                    imgSrc={Richard} color={'#0BC5B9'} maxW={250} padding={9} />}
            </div>
            {timeToChange?<div className='position-absolute' style={{zIndex:4, right:-130, top:150}}>
                <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review'
                    imgSrc={Richard} color={'#0BC5B9'} maxW={250} padding={9} />
            </div>:
            (<>
                <div className='position-absolute' style={{zIndex:4, right:-130, top:150}}>
                    <Message name='Richard Tokunbo'
                        message='All my project milestones were easy to set track and review' imgSrc={Richard}
                        color={'#0BC5B9'} maxW={250} padding={9} />
                </div>

                <div className='position-absolute' style={{zIndex:1, right:-110, top:150}}>
                    <Message name='Jenny Wilson' message='No more messages from unserious clients' color={'#FFAC0E'}
                        maxW={250} padding={9} />
                </div>
            </>
            )
            }
            {timeToChange?<Image className='img-responsive' src={Iphone2} alt="iphone" objectFit='contain' />:<Image className='img-responsive' src={Iphone} alt="iphone" objectFit='contain' />}
        </div>


    </div>
  )
}

export default SecondAnimation
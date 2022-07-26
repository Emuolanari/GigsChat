import Image from "next/image"
import { useEffect, useState } from "react";
import Message from "./Message"
import CoolGirl from './../assets/coolgirl.png'
import Richard from './../assets/richard.jpg'
import Iphone from './../assets/iphone.svg'
import Iphone2 from './../assets/iphone2.svg'
import { useTransition, animated } from "@react-spring/web";

function SecondAnimation() {
    
    const [timeToChange, setTimeToChange] = useState(2);
    const transition = useTransition(timeToChange, {
        from:{x:0,y:-0, opacity:0}, //right, top
        enter:{x:300,y:-330, opacity:1},//left, bottom
        leave:{x:0,y:0, opacity:0}
    })
    useEffect(() => {
        const interval = setInterval(() => setTimeToChange(!timeToChange), 1500)
    
        return () => {
          clearInterval(interval);
        };
      }, [timeToChange])

  return (
    <div className="d-flex justify-content-center text-white">
        <div style={{maxWidth:'100%',maxHeight:'100%', height: 'auto', position:'relative'}}>
            <div className="position-absolute hiddenMessage" style={{zIndex:2, left:-120, bottom:170}}>{transition((style, item)=>item?'':<animated.div style={style}>
                <Message name='Jenny Wilson' message='No more messages from unserious clients' imgSrc={CoolGirl}
                    color={'#FFAC0E'} maxW={250} padding={9} />
            </animated.div>)}</div>
            <div className='position-absolute hiddenMessage' style={{zIndex:4,left:-120, bottom:170}}>
                {timeToChange?
                <Message name='Jenny Wilson' message='No more messages from unserious clients' imgSrc={CoolGirl}
                    color={'#FFAC0E'} maxW={250} padding={9} />:
                <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review'
                    imgSrc={Richard} color={'#0BC5B9'} maxW={250} padding={9} />}
        
            </div>
            {timeToChange?<div className='position-absolute hiddenMessage' style={{zIndex:4, right:-130, top:150}}>
                <Message name='Richard Tokunbo' message='All my project milestones were easy to set track and review'
                    imgSrc={Richard} color={'#0BC5B9'} maxW={250} padding={9} />
            </div>:
            (<>
                <div className='position-absolute hiddenMessage' style={{zIndex:40, right:-130, top:150}}>
                    <Message name='Richard Tokunbo'
                        message='All my project milestones were easy to set track and review' imgSrc={Richard}
                        color={'#0BC5B9'} maxW={250} padding={9} />
                </div>

                {/* <div className='position-absolute' style={{zIndex:1, right:-110, top:150}}>
                    <Message name='Jenny Wilson' message='No more messages from unserious clients' color={'#FFAC0E'}
                        maxW={250} padding={9} />
                </div> */}
            </>
            )
            }
            {timeToChange?<Image className='img-responsive' src={Iphone2} alt="iphone" objectFit='contain' />:<Image className='img-responsive' src={Iphone} alt="iphone" objectFit='contain' />}
        </div>


    </div>
  )
}

export default SecondAnimation
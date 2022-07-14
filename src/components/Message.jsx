import Image from "next/image"
import NigerGirl from './../assets/NigerGirl.png'

const Message = ({name, message, imgSrc, color, maxW, padding}) => {
  return (
    <div className="d-flex align-items-center shadow-sm" style={{ backgroundColor:color, maxWidth:maxW, height: 80, fontSize:10, padding:padding, borderRadius:8 }}>
        <div className="d-flex justify-content-between" style={{width:'100%'}}>
            <div className="p-1" style={{width:'30%'}}>
                <Image src={imgSrc} alt='message' objectFit="cover" height={55} width={55} style={{borderRadius:'50%'}}/>
            </div>
            <div className="d-flex flex-column p-1" style={{width:'70%'}}>
                <span style={{fontFamily:'Raleway', fontWeight:600}}>{name}</span>
                <span style={{fontFamily:'Raleway', fontWeight:200}}>{message}</span>
            </div>

        </div>
    </div>
  )
}

export default Message
import Image from "next/image"

const Message = ({name, message, imgSrc, color, maxW, padding}) => {
  return (
    <div className="d-flex align-items-center shadow-sm responsiveMessage"
      style={{ backgroundColor:color, maxWidth:maxW, padding:padding}}>
      <div className="d-flex justify-content-between" style={{height:'100%',width:'100%'}}>
        <div className="p-1" style={{width:'30%'}}>
          {imgSrc?<Image src={imgSrc} alt='message' objectFit="cover" height={55} width={55} style={{borderRadius:'50%'}} />:
          <div style={{height:58, width:55, backgroundColor:color}}></div>}
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
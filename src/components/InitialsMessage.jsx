const InitialsMessage = ({message, initials, color, position}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2" style={{maxWidth:350}}>
        {position=='left' && 
        <div className="position-relative d-flex justify-content-center align-items-center ms-3">
            <div className="d-flex justify-content-center position-absolute align-items-center respInitialsM"
                style={{ borderRadius:'50%', backgroundColor:color, height:30, width:30 }}>
                <span className="text-white" style={{fontFamily:'Raleway', fontWeight:400}}>{initials}</span>
            </div>
            <div className="position-absolute" style={{borderRadius:'50%', backgroundColor:'green', height:4, width:4, right:-12, top:8}}/>
        </div>
 }
        <div className="d-flex align-items-center shadow-sm p-1 respInitialsM"
            style={{borderRadius:10, backgroundColor:'rgba(255,255,255,0.9)'}}>
            <span className="text-muted px-2" style={{fontFamily:'Raleway'}}>
                {message}
            </span>
        </div>

        {position=='right' &&
        <div className="position-relative d-flex justify-content-center align-items-center me-3">
            <div className="d-flex justify-content-center position-absolute align-items-center respInitialsM"
                style={{ borderRadius:'50%', backgroundColor:color, height:30, width:30 }}>
                <span className="text-white" style={{fontFamily:'Raleway', fontWeight:400}}>{initials}</span>
            </div>
            <div className="position-absolute"
                style={{borderRadius:'50%', backgroundColor:'green', height:4, width:4, right:-12, top:8}} />
        </div>
        }
    </div>
  )
}

export default InitialsMessage
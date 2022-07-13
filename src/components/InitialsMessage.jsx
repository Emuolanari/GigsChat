const InitialsMessage = ({message, initials, color}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2 " style={{maxWidth:330}}>
        <div className="d-flex justify-content-center align-items-center gap-2" style={{ borderRadius:'50%', backgroundColor:color, height:30, width:30 }}>
            <span className="text-white" style={{fontFamily:'Raleway', fontWeight:400}}>{initials}</span>
        </div>
        <div className="d-flex align-items-center shadow-sm p-1" style={{width:'90%', borderRadius:10, backgroundColor:'rgba(255,255,255,0.9)'}}>
            <span className="text-muted" style={{fontFamily:'Raleway'}}>
                {message}
            </span>
        </div>
    </div>
  )
}

export default InitialsMessage
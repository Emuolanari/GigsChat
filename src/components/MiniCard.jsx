export default function MiniCard({title, body, iconColor, children}) {
  return (
    <div className='card shadow p-3 mb-3 simple-linear position-relative'
      style={{ width:'12.6rem', height:'14rem', marginRight:20, borderRadius:18, border:'3px solid white' }}>
      <div className='border-rounded d-flex justify-content-center align-items-center'
        style={{borderRadius:5, height:35, width:35, backgroundColor:`${iconColor}`, position:'absolute', padding:2, top:-15, bottom:0, zIndex:200}}>
        {children}
      </div>
      <div className="card-body text-center">
        <div className='bg-info.bg-gradient'>
          <p className='card-title' style={{fontFamily:'Raleway', fontWeight:600}}>{title}</p>
        </div>
        <div>
          <span className='text-muted' style={{fontFamily:'Raleway', fontWeight:200, fontSize:13}}>{body}</span>
        </div>
      </div>
    </div>
  )
}

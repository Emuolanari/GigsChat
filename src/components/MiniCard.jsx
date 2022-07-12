import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MiniCard({title, body, icon, iconColor}) {
  return (
    <div className='card shadow p-3 mb-3 simple-linear position-relative'
      style={{ width:'13.2rem', minWidth: '13rem', height:'15rem', marginRight:20, borderRadius:18, border:'3px solid white' }}>
      <div className='border-rounded d-flex justify-content-center align-items-center'
        style={{borderRadius:5, height:35, width:35, backgroundColor:`${iconColor}`, position:'absolute', padding:4, top:-9, bottom:0, zIndex:200}}>
        <FontAwesomeIcon icon={icon} style={{}} color={'white'} />
      </div>
      <div className="card-body text-center">
        <div className='bg-info.bg-gradient'>
          <p className='card-title' style={{fontFamily:'Raleway', fontWeight:400}}>{title}</p>
        </div>
        <div>
          <span className='text-muted' style={{fontFamily:'Raleway', fontWeight:200}}>{body}</span>
        </div>
      </div>
    </div>
  )
}

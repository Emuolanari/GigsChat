import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MiniCard({title, body, icon}) {
  return (
    <div className='card shadow p-3 mb-3 simple-linear position-relative' style={{ width:'13.2rem', minWidth: '13rem', marginRight:20 }}>
            <FontAwesomeIcon icon={icon} style={{position:'absolute', top:-9, bottom:0, zIndex:200}}/>
        <div className="card-body text-center">
            <div className='bg-info.bg-gradient'>
                <p className='card-title'>{title}</p>
            </div>
            <div>
                <span className='text-muted'>{body}</span>
            </div>
        </div>
    </div>
  )
}

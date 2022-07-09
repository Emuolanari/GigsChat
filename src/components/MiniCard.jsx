import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MiniCard({title, body, icon}) {
  return (
    <div className='card shadow p-3 mb-3 simple-linear position-relative' style={{ width:'13.2rem', minWidth: '13rem', marginRight:20 }}>
            {/* <div className="item postion-relative">
                <div className="des" style={{position:'absolute', bottom:0, top:0}}>
                    <i className="fa fa-plus-square" style="font-size:48px;color:red"></i>
                </div>
            </div> */}
            <FontAwesomeIcon icon={icon} style={{position:'absolute', top:0, bottom:0, zIndex:200}}/>
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

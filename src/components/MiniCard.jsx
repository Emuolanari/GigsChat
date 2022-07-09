import React from 'react'

export default function MiniCard({title, body}) {
  return (
    <div className='card shadow p-3 mb-3' style={{ width:'13.2rem', minWidth: '13rem', marginRight:20 }}>
        <div className="card-body text-center">
            <div style={{backgroundColor: '#F1FCFB'}}>
                <p className='card-title'>{title}</p>
            </div>
            <div>
                <span className='text-muted'>{body}</span>
            </div>
        </div>
    </div>
  )
}

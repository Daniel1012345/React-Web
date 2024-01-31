import React from 'react'
import './Content.css'
const Content = ({ContentText, ContentSpan}) => {
  return (
    <>
        <div className='Content'>
            <h6>{ContentText} <span>{ContentSpan}</span></h6>
        </div>
    </>
  )
}

export default Content
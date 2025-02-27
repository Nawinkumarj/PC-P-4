import React from 'react'
import { assets } from '../assets/assets'

const SectionTitle = ({title}) => {
  return (
    <div className='sectionTitleContainer'>
        <img src={assets.RectangleBG} />
        <h1>{title}</h1>
    </div>
  )
}

export default SectionTitle
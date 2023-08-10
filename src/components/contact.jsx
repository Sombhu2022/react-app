import React from 'react'
import img1 from '../images/image1.png'
import '../style/contact.scss'

function contact() {
   

  return (
    <div>contact
        <h1>this is contuct page in this site </h1>
 <div className="image_container" >
  <p className="img_description" id='img_description' style={{display:'none'}}>the girl</p>
     <img src={img1} alt="img" />
    </div>
    </div>
  )
}

export default contact
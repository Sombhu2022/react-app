import React from 'react'
import img from '../images/img1.jpg'
import '../style/home.css'
function home() {
  return (
    <div className='home_div'><h1>
        this is home page ... 

    </h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quis tempora commodi ratione veniam, facere sunt similique cupiditate consectetur ad quibusdam ut hic est praesentium expedita, amet accusamus? Beatae rerum deleniti quis dolorum soluta, dolores iusto fuga quod possimus maxime! Dolorem inventore at dicta cupiditate? Quos eos dolorem possimus sequi?

    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, doloribus minus ex nesciunt alias magni numquam, ducimus reprehenderit, neque incidunt fugiat ipsam eum aliquid. Beatae dignissimos voluptatem molestias dolores illo?
    </p>
    <div className="image_contaner">
      
    <img src={img} alt="img" />
    </div>
    
      
    
    
    </div>
  )
}


export default home

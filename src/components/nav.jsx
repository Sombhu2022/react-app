import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../style/nav.scss'


function nav() {
   
    let bg_change=()=>{
        let bg_mode_toggel=document.body.style;
        // let bg_color=bg_mode_toggel.background;

        if(document.getElementById('bg').innerText === "☀️")
        {
            document.getElementById('bg').innerText="🌙"
            bg_mode_toggel.color="white";
            bg_mode_toggel.background= "rgba(4, 0, 18, 0.911)";
        }
        else{
            bg_mode_toggel.background= "rgba(245, 245, 245, 0.994)";
            bg_mode_toggel.color="rgba(4, 0, 18, 0.911)";
            document.getElementById('bg').innerText="☀️"

        }
        
        
    }


  return (
    <div className='nav-div'>

        <ul>
            <li>
                <HashLink className='link' to='/#home'>Home</HashLink>
            </li>
            <li>
                <HashLink className='link' to='/#about'>About</HashLink>
            </li>
            <li>
                <HashLink  className='link' to='/#contact'>Contact</HashLink>
            </li>
            <li>
                <HashLink className='link' to='/#'>blank</HashLink>
            </li>
            <li>
                <span className='bg_mode' id='bg' onClick={bg_change}>☀️</span>
            </li>
          
        </ul>
    </div>
  )
}

export default nav
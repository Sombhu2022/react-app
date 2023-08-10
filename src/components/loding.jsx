import React from 'react'
import ReactLoding from 'react-loading'
function loding() {
  return (
    <div>loding......
            <ReactLoding type={'spin'} color={'red'} height={'10%'} width={'10%'} delay={'2s'}/>
    </div>
  )
}

export default loding
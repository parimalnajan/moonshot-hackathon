 /* eslint-disable */
 import React, { useState } from 'react'

const CustumizeButton = () => {
      const [buttonStyles,setbuttonStyles] = useState({color:"red",backgroundColor:"gray"});
    
      const styleKeys= Object.keys(buttonStyles)
      console.log(styleKeys)
      return (<div>
        <button style={buttonStyles}>
          button
        </button>

        <div style={{display:"flex", flexDirection:"row"}}>

        <div style={{display:"flex", flexDirection:"column"}}>

          -----inputs here----
          --input
          padding x,  - +/- button - every input linked to state
          padding y,
          bg color
          </div>
          
        <div>---make this a nice card---
          <div> {styleKeys.map((x,i)=><div key={i} >{x}:{buttonStyles[x]}</div>)}</div>
           </div>
           </div>
        
    </div>
      );
    }
    
  

export default CustumizeButton
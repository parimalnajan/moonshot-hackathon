 /* eslint-disable */
 import React, { useState } from 'react'
 import { Sandpack } from "@codesandbox/sandpack-react";

/* JSX Usage */


const CustumizeButton = () => {

  const button = `
  export default function App() {
    return <button >
  button
</button>
}`        
      const [buttonStyles,setbuttonStyles] = useState({color:"red",backgroundColor:"gray"});
    
      const styleKeys= Object.keys(buttonStyles)
      console.log(styleKeys)
      
      return (<div>
        <div style={{padding:"16px", marginLeft:"24px"}}>
          </div><Sandpack files={{"/App.js":button}} template="react" SandpackPredefinedTheme = "dark" theme={"dark"} />;

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
 /* eslint-disable */
 import React, { useState } from 'react'
 import { Sandpack } from "@codesandbox/sandpack-react";

/* JSX Usage */


const CustumizeButton = () => {
  const [buttonStyles,setbuttonStyles] = useState({color:"red",backgroundColor:"gray"});

  const button = `
 import React, { useState } from 'react'

  export default function App() {
  const [buttonStyles,setbuttonStyles] = useState({color:"red",backgroundColor:"gray"});

    return <button style={buttonStyles}>
  button
</button>
}`        
    
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
          
           </div>

           <br/>
           <br/>
        <div style={{border:"1px solid silver", display:"flex", flexDirection:'column'}}> 
        <div>Style snippet: </div>
          <div> {styleKeys.map((x,i)=><div key={i} >{x}:{buttonStyles[x]}</div>)}</div>
           </div>
        
    </div>
      );
    }
    
  

export default CustumizeButton
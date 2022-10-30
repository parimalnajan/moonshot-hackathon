 /* eslint-disable */
 import React, { useState } from 'react'
 import { Sandpack } from "@codesandbox/sandpack-react";

/* JSX Usage */


const CustumizeButton = () => {
  const [buttonStyles,setbuttonStyles] = useState({color:"red",backgroundColor:"gray",padding:"4px"});
  
  
  
  const button = `
  import React, { useState } from 'react'
  
  export default function App() {
    const [buttonStyles,setbuttonStyles] = useState({color:"red",backgroundColor:"gray"});
    
    return <button style={buttonStyles}>
    button
    </button>
  }        `

  const list = `import React, { useState } from 'react'

  export default function App() {

    return(
      <ul>
      <li>
        one
      </li>
      <li>two    
      </li>
    </ul>
    )
   
  }`;

  const form = `import React, { useState } from 'react'

  export default function App() {
    return(
      <div>
      <label for="name">Name (4 to 8 characters):</label>
  
      <input type="text" id="name" name="name" required
             minlength="4" maxlength="8" size="10"/>
             </div>
    )
    
}
`;

  
  const [editorState, setEditorState] = useState(button)
      const styleKeys= Object.keys(buttonStyles)
      console.log(button)
      
      return (<div>
        <div style={{padding:"16px", marginLeft:"24px"}}>
          </div><Sandpack files={{"/App.js":editorState}} template="react" SandpackPredefinedTheme = "dark" theme={"dark"} />;





       <div style={{paddingLeft:"40px",paddingRight:"40px"}}>
       <div>component templates -click to open in editor-</div>
          <button style={buttonStyles}>button</button>
          <button
            onClick={() => {
              setEditorState(button);
            }}
          >
            edit
          </button>

          <br />
          <br />
          <button style={{ padding: "4px" }}>- input form -</button>
          <button
            onClick={() => {
              setEditorState(form);
            }}
          >
            edit
          </button>

          <br />
          <br />
          <button style={{ padding: "4px" }}>- lists -</button>
          <button
            onClick={() => {
              setEditorState(list);
            }}
          >
            edit
          </button>

          <br />
          <br />
          <button style={{ padding: "4px" }}>- nav elements -</button>
          <button
            onClick={() => {
              setEditorState(button);
            }}
          >
            edit
          </button>

          <br />
          <br />
          <div style={{fontWeight:"bold",marginBottom:"10px"}} >Style snippet: </div>
          <div
            style={{
              border: "1px solid silver",
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              borderRadius:"8px",
            }}
          >
            <div>
              {" "}
              {styleKeys.map((x, i) => (
                <div key={i}>
                  {x}:{buttonStyles[x]}
                </div>
              ))}
            </div>
          </div>
       </div>
        </div>
      );
    }
    
  

export default CustumizeButton